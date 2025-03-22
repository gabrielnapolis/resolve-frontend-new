import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'
import { InputMask } from '@react-input/mask'

type OverviewSectionProps = FormSectionBaseProps

const OverviewSection = ({ control, errors }: OverviewSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Dados Gerais</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Nome"
                    invalid={Boolean(errors.fullname)}
                    errorMessage={errors.fullname?.message}
                >
                    <Controller
                        name="fullname"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Informe seu nome"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="CPF/CNPJ"
                    invalid={Boolean(errors.cpf)}
                    errorMessage={errors.cpf?.message}
                >
                    <Controller
                        name="cpf"
                        control={control}
                        render={({ field }) => (
                            <InputMask
                                component={Input}
                                mask="___.___.___-__"
                                replacement={{ _: /\d/ }}
                                {...field}
                                placeholder="Digite seu CPF"
                            />
                        )}
                    />
                </FormItem>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Telefone"
                    className="w-full"
                    invalid={Boolean(errors.fone)}
                    errorMessage={errors.fone?.message}
                >
                    <Controller
                        name="fone"
                        control={control}
                        render={({ field }) => (
                            <InputMask
                                component={Input}
                                mask="(__) _____-____"
                                replacement={{ _: /\d/ }}
                                {...field}
                                placeholder="Digite seu telefone"
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="Data de Nascimento"
                    className="w-full"
                    invalid={Boolean(errors.birthday)}
                    errorMessage={errors.birthday?.message}
                >
                    <Controller
                        name="birthday"
                        control={control}
                        render={({ field }) => (
                            <InputMask
                                component={Input}
                                mask="__/__/____"
                                replacement={{ _: /\d/ }}
                                {...field}
                                placeholder="Informe sua data de nascimento"
                            />
                        )}
                    />
                </FormItem>
            </div>

            <div className="w-full">
                <FormItem
                    label="Descrição do Prestador"
                    invalid={Boolean(errors.description)}
                    errorMessage={errors.description?.message}
                >
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Nos conte um pouco sobre você"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default OverviewSection
