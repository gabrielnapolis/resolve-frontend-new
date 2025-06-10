import { SubmitHandler, useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { date, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Card } from '@/components/ui/card'

import { InputMask } from '@react-input/mask'

import CardContent from '@/components/ui/card'
import { authFetch } from '@/services/AuthService'
import dotenv from 'dotenv'

const PaymentCardForm = () => {
    const formSchema = z.object({
        numberCard: z.string(),
        nameCard: z.string().min(4),
        dateYear: z.string(),
        dateMonth: z.string(),
        cvv: z.string(),
        cpf: z.string(),
    })

    const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            numberCard: '',
            nameCard: '',
            dateYear: '',
            dateMonth: '',
            cvv: '',
            cpf: '',
        },
    })

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
        data: any,
    ) => {
        let PagSeguro = (window as any)['PagSeguro']
        if (!PagSeguro) {
            alert(
                'Não foi possível realizar o pagamento, entre em contato com o administrador.',
            )
            return
        }

        let cardData = {
            publicKey: import.meta.env.NEXT_PUBLIC_PB_KEY,
            holder: data.nameCard,
            number: data.numberCard.replace(/[^\d.-]+/g, ''),
            expMonth: data.dateMonth,
            expYear: data.dateYear,
            securityCode: data.cvv,
        }

        const card = PagSeguro.encryptCard(cardData)
        const encrypted = card.encryptedCard
        const hasErrors = card.hasErrors
        if (hasErrors) {
            alert(
                'Não foi possível realizar o pagamento. ' +
                    JSON.stringify(card.errors),
            )
            console.log(hasErrors)
            return
        }

        const url = import.meta.env.NEXT_PUBLIC_API
        let response = await authFetch(`${url}/payment/subscribe`, {
            method: 'POST',
            body: JSON.stringify({
                nameCard: data.nameCard,
                numberCard: data.numberCard.replace(/[^\d.-]+/g, ''),
                month: data.dateMonth,
                year: data.dateYear,
                cvv: data.cvv,
                cpf: data.cpf.replace(/[^\d.-]+/g, ''),
                card: encrypted,
            }),
        })

        if (response.success) {
            alert('Pagamento efetuado com sucesso!')
            let configs = JSON.parse(localStorage.getItem('configs') ?? '{}')
            configs.hasSubscription = true
            localStorage.setItem('configs', JSON.stringify(configs))

            // router.push('/');
        } else {
            console.log(response.error)
            alert(
                'Não foi possível realizar o pagamento no momento, tente novamente mais tarde.',
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card
                    header={{
                        content: <title>Assinatura via cartão</title>,
                        className: undefined,
                        bordered: false,
                        extra: undefined,
                    }}
                >
                    <CardContent>
                        <div className="grid gap-2">
                            <label htmlFor="name">Nome</label>
                            <Input
                                id="name"
                                placeholder="Insira o nome como está no Cartão"
                                {...register('nameCard')}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="number">Número do Cartão</label>
                            <Input
                                id="number"
                                placeholder="Inisra o número do cartão"
                                {...register('numberCard')}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="number">CPF</label>
                            <InputMask
                                component={Input}
                                mask="___.___.___-__"
                                replacement={{ _: /\d/ }}
                                placeholder="Digite seu CPF"
                                {...register('cpf')}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="month">Mês</label>
                                <select id="month" {...register('dateMonth')}>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="year">Ano</label>
                                <select id="year" {...register('dateYear')}>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option
                                            key={i}
                                            value={`${new Date().getFullYear() + i}`}
                                        >
                                            {new Date().getFullYear() + i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="cvc">CVC</label>
                                <Input
                                    id="cvc"
                                    placeholder="CVC"
                                    {...register('cvv')}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mb-5 gap-4">
                            <Button variant={'solid'} type="button">
                                Voltar
                            </Button>
                            <Button>Realizar Pagamento</Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </>
    )
}

export default PaymentCardForm
