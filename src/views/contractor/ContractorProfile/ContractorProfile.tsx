import { useMemo, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Upload from '@/components/ui/Upload'
import Input from '@/components/ui/Input'
import Avatar from '@/components/ui/Avatar'
import { Form, FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { components } from 'react-select'
import { apiGetSettingsProfile } from '@/services/AccontsService'
import sleep from '@/utils/sleep'
import useSWR from 'swr'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { HiOutlineUser } from 'react-icons/hi'
import { TbPlus } from 'react-icons/tb'
import type { ZodType } from 'zod'
import type { GetSettingsProfileResponse } from './_components/types'
import AdaptiveCard from '@/components/shared/AdaptiveCard'

type ProfileSchema = {
    firstName: string
    lastName: string
    email: string
    dialCode: string
    phoneNumber: string
    img: string
    country: string
    address: string
    state: string
    city: string
}

const validationSchema: ZodType<ProfileSchema> = z.object({
    firstName: z.string().min(1, { message: 'First name required' }),
    lastName: z.string().min(1, { message: 'Last name required' }),
    email: z
        .string()
        .min(1, { message: 'Email required' })
        .email({ message: 'Invalid email' }),
    dialCode: z.string().min(1, { message: 'Please select your country code' }),
    phoneNumber: z
        .string()
        .min(1, { message: 'Please input your mobile number' }),
    country: z.string().min(1, { message: 'Please select a country' }),
    address: z.string().min(1, { message: 'Addrress required' }),
    state: z.string().min(1, { message: 'Postcode required' }),
    city: z.string().min(1, { message: 'City required' }),
    img: z.string(),
})

const SettingsProfile = () => {
    const { data, mutate } = useSWR(
        '/api/settings/profile/',
        () => apiGetSettingsProfile<GetSettingsProfileResponse>(),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            revalidateOnReconnect: false,
        },
    )

    const beforeUpload = (files: FileList | null) => {
        let valid: string | boolean = true

        const allowedFileType = ['image/jpeg', 'image/png']
        if (files) {
            for (const file of files) {
                if (!allowedFileType.includes(file.type)) {
                    valid = 'Por favor, envie uma imagem .jpeg ou .png!'
                }
            }
        }

        return valid
    }

    const {
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        control,
    } = useForm<ProfileSchema>({
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (data) {
            reset(data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const onSubmit = async (values: ProfileSchema) => {
        await sleep(500)
        if (data) {
            mutate({ ...data, ...values }, false)
        }
    }

    return (
        <>
            <AdaptiveCard className="h-full">
                <div className="flex flex-auto h-full">
                    <div className="ltr:xl:pl-6 rtl:xl:pr-6 flex-1 py-2">
                        <h4 className="mb-8">Informações Pessoais</h4>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-8">
                                <Controller
                                    name="img"
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex items-center gap-4">
                                            <Avatar
                                                size={90}
                                                className="border-4 border-white bg-gray-100 text-gray-300 shadow-lg"
                                                icon={<HiOutlineUser />}
                                                src={''}
                                            />
                                            <div className="flex items-center gap-2">
                                                <Upload
                                                    showList={false}
                                                    uploadLimit={1}
                                                    beforeUpload={beforeUpload}
                                                    onChange={(files) => {
                                                        if (files.length > 0) {
                                                            field.onChange(
                                                                URL.createObjectURL(
                                                                    files[0],
                                                                ),
                                                            )
                                                        }
                                                    }}
                                                >
                                                    <Button
                                                        variant="solid"
                                                        size="sm"
                                                        type="button"
                                                        icon={<TbPlus />}
                                                    >
                                                        Selecionar Foto
                                                    </Button>
                                                </Upload>
                                                <Button
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => {
                                                        field.onChange('')
                                                    }}
                                                >
                                                    Remover
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="grid md:grid-cols-1 gap-4">
                                <FormItem
                                    label="Nome Completo"
                                    invalid={Boolean(errors.firstName)}
                                    errorMessage={errors.firstName?.message}
                                >
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                type="text"
                                                autoComplete="off"
                                                placeholder="Nome Completo"
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormItem>
                            </div>
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
                                            autoComplete="off"
                                            placeholder="Email"
                                            {...field}
                                        />
                                    )}
                                />
                            </FormItem>
                            <div className="flex items-end gap-4 w-full mb-6">
                                <FormItem
                                    label='Telefone'
                                    className="w-full"
                                    invalid={
                                        Boolean(errors.phoneNumber) ||
                                        Boolean(errors.dialCode)
                                    }
                                    errorMessage={errors.phoneNumber?.message}
                                >
                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        render={({ field }) => (
                                            <NumericInput
                                                autoComplete="off"
                                                placeholder="Telefone"
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                            />
                                        )}
                                    />
                                </FormItem>
                            </div>
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
                                            placeholder="Rua, avenida, logradouro"
                                            {...field}
                                        />
                                    )}
                                />
                            </FormItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                placeholder="Cidade"
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormItem>
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
                                                placeholder="Estado"
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormItem>
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    variant="solid"
                                    type="submit"
                                    loading={isSubmitting}
                                >
                                    Atualizar Informações
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </AdaptiveCard>
        </>
    )
}

export default SettingsProfile
