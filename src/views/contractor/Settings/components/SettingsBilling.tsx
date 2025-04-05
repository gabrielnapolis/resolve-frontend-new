import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Avatar from '@/components/ui/Avatar'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CreditCardDialog from '@/components/view/CreditCardDialog'
import BillingHistory from './BillingHistory'
import { apiGetSettingsBilling } from '@/services/AccontsService'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import sleep from '@/utils/sleep'
import { TbPlus } from 'react-icons/tb'
import useSWR from 'swr'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { PiLightningFill } from 'react-icons/pi'
import { NumericFormat } from 'react-number-format'

import type {
    GetSettingsBillingResponse,
    CreditCard,
    CreditCardInfo,
} from '../types'
import ActiveSubscription from './ActiveSubscription'
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

export default SettingsBilling
