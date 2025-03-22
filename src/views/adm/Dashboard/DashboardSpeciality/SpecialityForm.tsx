import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { Form, FormItem } from '@/components/ui/Form'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FormSectionBaseProps } from '@/views/contractor/ContractorForm/types'
import { zodResolver } from '@hookform/resolvers/zod'
import type { CommonProps } from '@/@types/common'
import { ZodType, z } from 'zod'
import { SpecialityFormSchema } from './types'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui'

type SpecialitySectionProps = FormSectionBaseProps

type SpecialityFormProps = {
    onFormSubmit: (values: SpecialityFormSchema) => void
    defaultValues?: SpecialityFormSchema
} & CommonProps

const validationSchema: ZodType<SpecialityFormSchema> = z.object({
    id: z.number().optional(),
    fullname: z.string().min(5),
    logoPath: z.string().optional(),
})

const SpecialitySection = () => {
    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<SpecialityFormSchema>({
        defaultValues: {},
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        reset({})
    }, [])

    const onSubmit = (values: SpecialityFormSchema) => {
        console.log(values)
    }

    return (
        <Form
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Container>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="gap-4 flex flex-col flex-auto">
                        <Card>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                placeholder="Nome da Especialidade"
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormItem>

                                <FormItem
                                    label="Logo"
                                    invalid={false}
                                    errorMessage={errors.logoPath?.message}
                                >
                                    <Controller
                                        name="logoPath"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormItem>
                            </div>
                            <div className="flex flex-row gap-4 justify-end">
                                <Button>Cancelar</Button>
                                <Button variant="solid">Cadastrar</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </Form>
    )
}

export default SpecialitySection
