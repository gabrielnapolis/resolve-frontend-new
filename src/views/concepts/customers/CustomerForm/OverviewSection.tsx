import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

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
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Informe seu CPF ou CNPJ"
                                {...field}
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
                            <NumericInput
                                autoComplete="off"
                                placeholder="Digite seu telefone"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
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
                            <NumericInput
                                autoComplete="off"
                                placeholder="Informe sua data de nascimento"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>
            </div>

           
            <div className="w-full"></div>
        </Card>
    )
}

export default OverviewSection
