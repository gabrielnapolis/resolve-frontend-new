
import Radio from '@/components/ui/Radio'
import { TbCreditCard, TbQrcode } from 'react-icons/tb'

type PaymentMethod = 'creditCard' | 'pix'

interface PaymentTypeProps {
    onChange: (paymentType: PaymentMethod) => void
    value?: PaymentMethod
}

const PaymentType = ({ onChange, value = 'creditCard' }: PaymentTypeProps) => {
    return (
        <div>
            <span className="block mb-4">Payment method</span>
            <Radio.Group
                value={value}
                onChange={(selectedValue) => onChange(selectedValue as PaymentMethod)}
            >
                <div className="flex flex-col gap-3">
                    <Radio value="creditCard">
                        <div className="flex items-center gap-2">
                            <TbCreditCard className="text-xl" />
                            <span>Credit Card</span>
                        </div>
                    </Radio>
                    <Radio value="pix">
                        <div className="flex items-center gap-2">
                            <TbQrcode className="text-xl" />
                            <span>PIX</span>
                        </div>
                    </Radio>
                </div>
            </Radio.Group>
        </div>
    )
}

export default PaymentType
