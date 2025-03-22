import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import OverviewSection from './OverviewSection'
import AddressSection from './AddressSection'
import TagsSection from './TagsSection'
import ProfileImageSection from './ProfileImageSection'
import AccountSection from './AccountSection'
import isEmpty from 'lodash/isEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import type { ContractorFormSchema } from './types'
import LoginSection from './LoginSection'

type ContractorFormProps = {
    onFormSubmit: (values: ContractorFormSchema) => void
    defaultValues?: ContractorFormSchema
    newCustomer?: boolean
} & CommonProps

const validationSchema: ZodType<ContractorFormSchema> = z
    .object({
        id: z.number().optional(),
        fullname: z.string().min(5, {
            message: 'Digite o nome corretamente',
        }),
        email: z.string().min(9, {
            message: 'Digite o E-mail corretamente',
        }),
        emailConfirmation: z.string(),
        //Validador de CPF
        cpf: z.string().refine((cpf: string) => {
            if (typeof cpf !== 'string') return false
            cpf = cpf.replace(/[^\d]+/g, '')
            if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
            const cpfDigits = cpf.split('').map((el) => +el)
            const rest = (count: number): number => {
                return (
                    ((cpfDigits
                        .slice(0, count - 12)
                        .reduce(
                            (soma, el, index) => soma + el * (count - index),
                            0,
                        ) *
                        10) %
                        11) %
                    10
                )
            }
            return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10]
        }, 'Digite um cpf válido.'),
        picture: z.string(),
        fone: z.string().min(9, {
            message: 'Exemplo: (62) 99999-9999',
        }),
        birthday: z.string().optional(),
        description: z.string(),
        password: z.string().min(6, {
            message: 'Senha muito curta',
        }),
        passwordConfirm: z.string(),
        cep: z.string(),
        state: z.string().min(1, {
            message: 'Selecione seu estado',
        }),
        city: z.string(),
        neighborhood: z.string(),
        address: z.string(),
        region: z.string(),
        specialities: z.array(z.number()).refine((value) => value.length > 0, {
            message: 'É necessário selecionar pelo menos 01 serviço',
        }),
    })
    .refine((value) => value.password === value.passwordConfirm, {
        message: 'As senhas não coincidem',
        path: ['passwordConfirm'],
    })
    .refine((value) => value.email === value.emailConfirmation, {
        message: 'Os e-mails não coincidem',
        path: ['emailConfirmation'],
    })

const ContractorForm = (props: ContractorFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomer = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<ContractorFormSchema>({
        defaultValues: {
            ...defaultValues,
        },
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: ContractorFormSchema) => {
        onFormSubmit?.(values)
    }

    return (
        <Form
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Container>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-[370px] gap-4 flex flex-col">
                        <ProfileImageSection
                            control={control}
                            errors={errors}
                        />
                        {/* <TagsSection control={control} errors={errors} /> */}
                        {!newCustomer && (
                            <AccountSection control={control} errors={errors} />
                        )}
                    </div>
                    <div className="gap-4 flex flex-col flex-auto">
                        <OverviewSection control={control} errors={errors} />
                        <AddressSection control={control} errors={errors} />
                        <LoginSection control={control} errors={errors} />
                    </div>
                </div>
            </Container>
            {/* <BottomStickyBar>{children}</BottomStickyBar> */}
        </Form>
    )
}

export default ContractorForm
