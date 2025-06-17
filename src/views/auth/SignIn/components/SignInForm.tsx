import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { FormItem, Form } from '@/components/ui/Form'
import PasswordInput from '@/components/shared/PasswordInput'
import classNames from '@/utils/classNames'
import { useAuth } from '@/auth'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import type { ReactNode } from 'react'

interface SignInFormProps extends CommonProps {
    disableSubmit?: boolean
    passwordHint?: string | ReactNode
    setMessage?: (message: string) => void
}

type SignInFormSchema = {
    email: string
    password: string
}
const handleFacebookLogin = () => {
    window.location.href = "http://localhost:3001/auth/facebook"; // Backend endpoint
};

const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/auth/google";
};

const onSubmit = async (data: any) => {
    const url = process.env.NEXT_PUBLIC_API;
    let response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.status == 200) {
        let data = await response.json();
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("configs", JSON.stringify(data.configs));
       // return router.push("/contractor/dashboard");
    }

    return alert("Usuário ou senha inválido.");
};
const validationSchema: ZodType<SignInFormSchema> = z.object({
    email: z
        .string({ required_error: 'Por favor, informe seu e-mail' })
        .min(1, { message: 'Por favor, informe seu e-mail' }),
    password: z
        .string({ required_error: 'Por favor, informe sua senha' })
        .min(1, { message: 'Por favor, informe sua senha' }),
})

const SignInForm = (props: SignInFormProps) => {
    const [isSubmitting, setSubmitting] = useState<boolean>(false)

    const { disableSubmit = false, className, setMessage, passwordHint } = props

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<SignInFormSchema>({
        resolver: zodResolver(validationSchema),
    })

    const { signIn } = useAuth()

    const onSignIn = async (values: SignInFormSchema) => {
        const { email, password } = values

        if (!disableSubmit) {
            setSubmitting(true)

            const result = await signIn({ email, password })
            console.log(result)
            if (result?.status === 'failed') {
                setMessage?.(result.message)
            }
        }

        setSubmitting(false)
    }

    return (
        <div className={className}>
            <Form onSubmit={handleSubmit(onSignIn)}>
                <FormItem
                    label="Email"
                    invalid={Boolean(errors.email)}
                    errorMessage={errors.email?.message}
                >
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="email"
                                placeholder="Email"
                                autoComplete="off"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Senha"
                    invalid={Boolean(errors.password)}
                    errorMessage={errors.password?.message}
                
                >
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <PasswordInput
                                type="text"
                                placeholder="Password"
                                autoComplete="off"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                {passwordHint}
                <Button
                    block
                    loading={isSubmitting}
                    variant="solid"
                    type="submit"
                >
                    {isSubmitting ? 'Entrando...' : 'Acessar'}
                </Button>
            </Form>
        </div>
    )
}

export default SignInForm
