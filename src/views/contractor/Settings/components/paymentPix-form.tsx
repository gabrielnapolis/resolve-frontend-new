import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

import { generateQrCode, validatePayment } from './actions'
import { Input } from '@/components/ui/input'
import { DoubleSidedImage } from '@/components/shared'

const PaymentPixForm = () => {
    const [qrCodeData, setQRCodeData] = useState(null as any)
    const [qrCode, setQrCode] = useState()
    const [copiaECola, setCopiaECola] = useState()

    function load() {
        generateQrCode()
            .then((e) => {
                console.log(e)
                setQRCodeData(e.data)
                setCopiaECola(e.data.payment.text)
                setQrCode(e.data.payment.links[0].href)
            })
            .catch((e) => console.log(e))
    }
    const validate = () => {
        if (!qrCodeData?.payment) return

        validatePayment(qrCodeData.id)
            .then((e) => {
                console.log(e)
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <form>
                <Card>
                    <div className="flex justify-center mb-5 gap-4">
                        <div>
                            {qrCode && (
                                <DoubleSidedImage
                                    darkModeSrc={qrCode}
                                    src={qrCode}
                                    width={300}
                                    height={300}
                                    alt="Picture of the author"
                                />
                            )}
                            {copiaECola && (
                                <>
                                    <label htmlFor="copiaEcola">
                                        Copia e Cola
                                    </label>
                                    <br />
                                    <input
                                        value={copiaECola}
                                        onChange={(e) => {}}
                                    />
                                    <br />
                                </>
                            )}

                            {!qrCodeData && (
                                <Button type="button" onClick={load}>
                                    Obter QR Code
                                </Button>
                            )}
                            {qrCodeData && (
                                <Button type="button" onClick={validate}>
                                    Validar Pagamento
                                </Button>
                            )}
                        </div>
                        <Button variant={'solid'} type="button">
                            Voltar
                        </Button>
                        <Button type="submit">Atualizar</Button>
                    </div>
                </Card>
            </form>
        </>
    )
}
export default PaymentPixForm
