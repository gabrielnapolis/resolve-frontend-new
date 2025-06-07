import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormItem, Form } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { TbTrash } from 'react-icons/tb'
import { apiCreateClient } from '@/services/ClientService'
import { z } from 'zod'
import { InputMask } from '@react-input/mask'

type ClientFormData = {
    fullname: string
    email: string
    emailConfirm: string
    password: string
    passwordConfirm: string
    birthday: string
    cpf: string
    fone: string
}

const validationSchema = z
    .object({
        fullname: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
        email: z.string().email('Email inválido'),
        emailConfirm: z.string().email('Email inválido'),
        password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
        passwordConfirm: z
            .string()
            .min(6, 'Confirmação de senha deve ter pelo menos 6 caracteres'),
        birthday: z.string().min(8, 'Data deve ter 8 dígitos'),
        cpf: z.string().min(14, 'CPF deve ter 14 dígitos'),
    })
    .refine((data) => data.email === data.emailConfirm, {
        message: 'Emails não coincidem',
        path: ['emailConfirm'],
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: 'Senhas não coincidem',
        path: ['passwordConfirm'],
    })

const ClientCreate = () => {
    const navigate = useNavigate()
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)
    const [formData, setFormData] = useState<ClientFormData>({
        fullname: '',
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: '',
        birthday: '',
        cpf: '',
        fone: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleInputChange = (field: keyof ClientFormData, value: string) => {
        let processedValue = value

        if (field === 'cpf') {
            processedValue = value
        }

        setFormData((prev) => ({
            ...prev,
            [field]: processedValue,
        }))

        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }))
        }
    }

    const validateForm = () => {
        try {
            validationSchema.parse(formData)
            setErrors({})
            return true
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Record<string, string> = {}
                error.errors.forEach((err) => {
                    if (err.path[0]) {
                        newErrors[err.path[0] as string] = err.message
                    }
                })
                setErrors(newErrors)
            }
            return false
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmiting(true)

        try {
            const apiData = {
                fullname: formData.fullname,
                email: formData.email,
                password: formData.password,
                birthday: formData.birthday.replace(/\D/g, ''),
                cpf: formData.cpf.replace(/[^\d]+/g, ''),
                fone: formData.fone.replace(/\D/g, ''),
            }

            await apiCreateClient(apiData)

            toast.push(
                <Notification type="success">
                    Cadastro realizado com sucesso!
                </Notification>,
                { placement: 'top-center' },
            )

            navigate('/adm/dashboard')
        } catch (error) {
            console.error('Erro ao criar cliente:', error)
            toast.push(
                <Notification type="danger">
                    Erro ao criar cliente!
                </Notification>,
                { placement: 'top-center' },
            )
        } finally {
            setIsSubmiting(false)
        }
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(false)
        toast.push(
            <Notification type="success">Cadastro cancelado!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/adm/dashboard')
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">
                                Cadastro de Cliente
                            </h3>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem
                                    label="Nome Completo"
                                    invalid={!!errors.fullname}
                                    errorMessage={errors.fullname}
                                >
                                    <Input
                                        value={formData.fullname}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'fullname',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Informe seu nome"
                                        invalid={!!errors.fullname}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Telefone"
                                    invalid={Boolean(errors.fone)}
                                    errorMessage={errors.fone}
                                >
                                    <InputMask
                                        component={Input}
                                        mask="(__) _____-____"
                                        replacement={{ _: /\d/ }}
                                        value={formData.fone}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'fone',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Digite seu telefone"
                                    />
                                </FormItem>

                                <FormItem
                                    label="CPF"
                                    invalid={!!errors.cpf}
                                    errorMessage={errors.cpf}
                                >
                                    <InputMask
                                        component={Input}
                                        mask="___.___.___-__"
                                        replacement={{ _: /\d/ }}
                                        value={formData.cpf}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'cpf',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Digite seu CPF"
                                        invalid={!!errors.cpf}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Data de Nascimento"
                                    invalid={!!errors.birthday}
                                    errorMessage={errors.birthday}
                                >
                                    <InputMask
                                        component={Input}
                                        mask="__/__/____"
                                        replacement={{ _: /\d/ }}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'birthday',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Informe sua data de nascimento"
                                    />
                                </FormItem>

                                <FormItem
                                    label="Email"
                                    invalid={!!errors.email}
                                    errorMessage={errors.email}
                                >
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'email',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="email@exemplo.com"
                                        invalid={!!errors.email}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Confirmar Email"
                                    invalid={!!errors.emailConfirm}
                                    errorMessage={errors.emailConfirm}
                                >
                                    <Input
                                        type="email"
                                        value={formData.emailConfirm}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'emailConfirm',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Confirme seu email"
                                        invalid={!!errors.emailConfirm}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Senha"
                                    invalid={!!errors.password}
                                    errorMessage={errors.password}
                                >
                                    <Input
                                        type="password"
                                        value={formData.password}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'password',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Senha"
                                        invalid={!!errors.password}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Confirmar Senha"
                                    invalid={!!errors.passwordConfirm}
                                    errorMessage={errors.passwordConfirm}
                                >
                                    <Input
                                        type="password"
                                        value={formData.passwordConfirm}
                                        onChange={(e) =>
                                            handleInputChange(
                                                'passwordConfirm',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Confirme sua senha"
                                        invalid={!!errors.passwordConfirm}
                                    />
                                </FormItem>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <span></span>
                                <div className="flex items-center gap-3">
                                    <Button
                                        type="button"
                                        customColorClass={() =>
                                            'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                        }
                                        icon={<TbTrash />}
                                        onClick={handleDiscard}
                                    >
                                        Sair
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="solid"
                                        loading={isSubmiting}
                                    >
                                        Cadastrar
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </AdaptiveCard>
            </Container>

            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="Cancelar cadastro?"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDiscard}
            >
                <p>
                    Tem certeza que deseja cancelar o cadastro? Você perderá
                    todas as informações não salvas.
                </p>
            </ConfirmDialog>
        </>
    )
}

export default ClientCreate
