
import PaymentCardForm from "./_components/paymentCard-form";
import PaymentType from "./_components/paymentType-form";
import PaymentPixForm from "./_components/paymentPix-form";
import { useState, useEffect } from "react";
import ActiveSubscription from "./_components/ActiveSubscription";

export default function Signature() {
    const [paymentType, setPaymentType] = useState("card");
    let [status, setStatus] = useState(false);

    useEffect(() => {
        let configs = JSON.parse(localStorage.getItem("configs") ?? "{}");
        if (
            configs.hasSubscription != undefined ||
            configs.hasSubscription != null
        ){
          setStatus(configs.hasSubscription);
        }
    }, [status]);

    return (
        <div className="grid grid-cols-3 gap-4">
            {status == false ?
                <>
                    <div className="flex flex-col">
                        <PaymentType onChange={setPaymentType} />
                    </div>

                    <div className="col-span-2">
                        {paymentType === "card" && <PaymentCardForm />}
                        {paymentType === "pix" && <PaymentPixForm />}
                    </div>
                </>
            : <ActiveSubscription /> }
        </div>
    );
}
