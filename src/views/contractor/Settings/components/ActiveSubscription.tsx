
import React, { useEffect, useState } from "react";
import { Card} from "@/components/ui/card";
import CardContent from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cancelSubscription, getSubscription } from "./actions";

export default function ActiveSubscription() {
    const [subscription, setSubscription] = useState({} as any);

    useEffect(() => {
        getSubscription().then((data) => {
            setSubscription(data);
            console.log(data);
        }).catch(e => {
          console.error(e);
        });
    }, []);

    async function cancelarAssinatura() {
        let response = await cancelSubscription();

        if (response && response.success) alert("Sua assinatura foi cancelada com sucesso.");
        else alert("Não foi possível cancelar sua assinatura no momento.");
    }

    function formatDate(date: string) {
        var data = new Date(date),
            dia = data.getDate().toString().padStart(2, "0"),
            mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
            ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    return (
        <>
            <Card>
           
                <CardContent className="grid gap-6">
                    <h1>Sua assinatura está ativa!</h1>
                    <h3>
                        Você pode seguir utilizando as funcionalidades premium.
                        {subscription?.nextInvoiceAt && (
                            <>
                                Sua assinatura será renovada em{" "}
                                {formatDate(subscription.nextInvoiceAt)}
                            </>
                        )}
                    </h3>
                </CardContent>
                <CardContent>
                    <Button onClick={cancelarAssinatura}>
                        Cancelar assinatura
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
