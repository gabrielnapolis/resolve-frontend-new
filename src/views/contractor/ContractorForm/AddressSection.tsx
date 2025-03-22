import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'
import Select from '@/components/ui/Select'
import { InputMask } from '@react-input/mask'

type AddressSectionProps = FormSectionBaseProps

const states = [{ value: 'go', label: 'Goiás' }]
const cities = [
    { value: 'goiania', label: 'Goiânia' },
    { value: 'aparecida', label: 'Aparecida de Goiânia' },
    { value: 'trindade', label: 'Trindade' },
    { value: 'canedo', label: 'Senador Canedo' },
]

type Option = {
    value: string
    label: string
}

const AddressSection = ({ control, errors }: AddressSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Endereço</h4>
            <FormItem
                label="Endereço"
                invalid={Boolean(errors.address)}
                errorMessage={errors.address?.message}
            >
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="Informe sua rua, avenida, logradouro"
                            {...field}
                        />
                    )}
                />
            </FormItem>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="Estado"
                    invalid={Boolean(errors.state)}
                    errorMessage={errors.state?.message}
                >
                    <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                            <Select<Option>
                                options={states}
                                {...field}
                                value={states.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                                placeholder="Selecione seu estado"
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Cidade"
                    invalid={Boolean(errors.city)}
                    errorMessage={errors.city?.message}
                >
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                            <Select<Option>
                                options={cities}
                                {...field}
                                value={cities.filter(
                                    (option) => option.value === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.value)
                                }
                                placeholder="Selecione seu estado"
                            />
                        )}
                    />
                </FormItem>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="Bairro"
                    invalid={Boolean(errors.neighborhood)}
                    errorMessage={errors.neighborhood?.message}
                >
                    <Controller
                        name="neighborhood"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Informe seu bairro/setor"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="CEP"
                    invalid={Boolean(errors.cep)}
                    errorMessage={errors.cep?.message}
                >
                    <Controller
                        name="cep"
                        control={control}
                        render={({ field }) => (
                            <InputMask
                                component={Input}
                                {...field}
                                mask="_____-___"
                                replacement={{ _: /\d/ }}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default AddressSection
