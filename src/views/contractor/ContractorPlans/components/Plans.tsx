import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { usePricingStore } from '../store/pricingStore'
import { apiGetPricingPlans } from '@/services/AccontsService'
import { featuresList } from '../constants'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import useQuery from '@/utils/hooks/useQuery'
import useSWR from 'swr'
import { NumericFormat } from 'react-number-format'
import { TbCheck } from 'react-icons/tb'
import type { GetPricingPanResponse } from '../types'

const mockPricingData: GetPricingPanResponse = {
    plans: [
        {
            id: 'weekly',
            name: 'Semanal',
            description: 'Plano ideal para iniciantes',
            price: { monthly: 29.90, annually: 299.00 },
            paymentCycle: 'mês',
            recommended: false,
            features: ['visibilidade', 'marketing', 'maiorVisibilidade', 'clientes']
        },
        {
            id: 'monthly',
            name: 'Mensal',
            description: 'Plano recomendado para profissionais',
            price: { monthly: 59.90, annually: 599.00 },
            paymentCycle: 'mês',
            recommended: true,
            features: ['visibilidade', 'marketing', 'maiorVisibilidade', 'clientes']
        },
        {
            id: 'annual',
            name: 'Anual',
            description: 'Plano para grandes empresas',
            price: { monthly: 99.90, annually: 999.00 },
            paymentCycle: 'mês',
            recommended: false,
            features: ['visibilidade', 'marketing', 'maiorVisibilidade', 'clientes']
        }
    ],
    featuresModel: []
}

const Plans = () => {
    const { paymentCycle, setPaymentDialog, setSelectedPlan } =
        usePricingStore()

    const query = useQuery()
    const subcription = query.get('subcription')
    const cycle = query.get('cycle')

    const data = mockPricingData

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-4">
            {data?.plans.map((plan, index) => (
                <div
                    key={plan.id}
                    className={classNames(
                        'px-6 pt-2 flex flex-col justify-between',
                        !isLastChild(data.plans, index) &&
                            'border-r-0 xl:border-r border-gray-200 dark:border-gray-700',
                    )}
                >
                    <div>
                        <h5 className="mb-6 flex items-center gap-2">
                            <span>{plan.name}</span>
                            {plan.recommended && (
                                <Tag className="rounded-full bg-green-200 font-bold">
                                    Recomendado
                                </Tag>
                            )}
                        </h5>
                        <div className="mt-6">
                            <NumericFormat
                                className="h1"
                                displayType="text"
                                value={plan.price[paymentCycle]}
                                prefix={'R$ '}
                                thousandSeparator={true}
                            />
                            <span className="text-lg font-bold">
                                {' '}
                                /{' '}
                               {plan.paymentCycle}
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                            {featuresList.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-center gap-4 font-semibold heading-text"
                                >
                                    {plan.features.includes(feature.id) && (
                                        <>
                                            <TbCheck
                                                className={classNames(
                                                    'text-2xl',
                                                    plan.features.includes(
                                                        feature.id,
                                                    )
                                                        ? 'text-primary'
                                                        : 'text-gray-100',
                                                )}
                                            />
                                            <span>
                                                {
                                                    feature.description[
                                                        plan.id as string
                                                    ]
                                                }
                                            </span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <Button
                            block
                            disabled={
                                subcription === plan.id &&
                                cycle === paymentCycle
                            }
                            onClick={() => {
                                setSelectedPlan({
                                    paymentCycle,
                                    planName: plan.name,
                                    price: plan.price,
                                })
                                setPaymentDialog(true)
                            }}
                        >
                            {subcription === plan.id && cycle === paymentCycle
                                ? 'Plano atual'
                                : 'Escolher plano'}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Plans
