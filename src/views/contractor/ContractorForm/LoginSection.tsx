import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'
import { useState } from 'react'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import type { MouseEvent } from 'react'

type LoginSectionProps = FormSectionBaseProps

const LoginSection = ({ control, errors }: LoginSectionProps) => {
    const [pwInputType, setPwInputType] = useState('password')

    const onPasswordVisibleClick = (e: MouseEvent) => {
        e.preventDefault()
        setPwInputType(pwInputType === 'password' ? 'text' : 'password')
    }

    const inputIcon = (
        <span
            className="cursor-pointer"
            onClick={(e) => onPasswordVisibleClick(e)}
        >
            {pwInputType === 'password' ? (
                <HiOutlineEyeOff />
            ) : (
                <HiOutlineEye />
            )}
        </span>
    )
    return (
        <Card>
            <h4 className="mb-6">Informações de Login</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="E-mail"
                    invalid={Boolean(errors.email)}
                    errorMessage={errors.email?.message}
                >
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="email"
                                autoComplete="off"
                                placeholder="E-mail"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="Confirmação de E-mail"
                    invalid={Boolean(errors.emailConfirm)}
                    errorMessage={errors.emailConfirm?.message}
                >
                    <Controller
                        name="emailConfirm"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="email"
                                autoComplete="off"
                                placeholder="Confirme seu e-mail"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="Senha"
                    invalid={Boolean(errors.password)}
                    errorMessage={errors.password?.message}
                >
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type={pwInputType}
                                suffix={inputIcon}
                                placeholder="Senha"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="Confirmação de senha"
                    invalid={Boolean(errors.passwordConfirm)}
                    errorMessage={errors.passwordConfirm?.message}
                >
                    <Controller
                        name="passwordConfirm"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type={pwInputType}
                                suffix={inputIcon}
                                placeholder="Confirme sua senha"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default LoginSection
