import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type AddressSectionProps = FormSectionBaseProps

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
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="SELECT ESTADO"
                                {...field}
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
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Informe sua cidade"
                                {...field}
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
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Informe seu CEP"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default AddressSection
