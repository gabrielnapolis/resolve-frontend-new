import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentCardForm from './paymentCard-form'
import PaymentPixForm from './paymentPix-form'
import PaymentType from './paymentType-form'

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const SettingsBilling = () => {
    const navigate = useNavigate()
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
        
                <>
                    <div className="flex flex-col">
                        <PaymentType onChange={setPaymentType} />
                    </div>

                    <div className="col-span-2">
                        {paymentType === "card" && <PaymentCardForm />}
                        {paymentType === "pix" && <PaymentPixForm />}
                    </div>
                </>
 
        </div>
    );
   
    
}

export default SettingsBilling
