
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { 
  generateQrCode,
  validatePayment
 } from "./actions";
import { Input } from "@/components/ui/input";

export default function PaymentPixForm() {
  const [qrCodeData, setQRCodeData] = useState(null as any);
  const [qrCode, setQrCode] = useState();
  const [copiaECola, setCopiaECola] = useState();
  function load() {
    generateQrCode()
      .then(e => {
        console.log(e);
        setQRCodeData(e.data);
        setCopiaECola(e.data.payment.text)
        setQrCode(e.data.payment.links[0].href)
      })
      .catch(e => console.log(e))
  }
  function validate(){
    if(!qrCodeData?.payment) return;

    validatePayment(qrCodeData.id)
      .then(e => {
        console.log(e);
      })
      .catch(e => console.log(e));
  }

  return (
    <>
        <form>
          <Card>
            <CardHeader>
              <CardTitle>Assinatura via PIX</CardTitle>
              <CardDescription>
                Realize o pagamento e aguarde a confirmação
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                {
                  qrCode && (
                    <Image
                    src={qrCode}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />
                  )
                }
                {
                  copiaECola && (
                    <>
                      <label htmlFor="copiaEcola">Copia e Cola</label>
                      <br />
                      <input value={copiaECola} onChange={e => {}} />
                      <br />
                    </>
                  )
                  
                }
                
                {
                  !qrCodeData && (
                    <Button type="button" onClick={load}>Obter QR Code</Button>)
                }
                                {
                  qrCodeData && (
                      <Button type="button" onClick={validate}>Validar Pagamento</Button>)
                }
              </div>


            </CardContent>
            <div className="flex justify-center mb-5 gap-4">
              <Button variant={"outline"} type="button">
                Voltar
              </Button>
              <Button type="submit" >Atualizar</Button>
            </div>
          </Card>
        </form>
    </>
  );
}
