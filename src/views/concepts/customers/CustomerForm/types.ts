import type { Control, FieldErrors } from 'react-hook-form'

export type ContractorFields = {
    id?: number
    picture: string
    fullname: string
    birthday?: string
    fone: string
    cpf: string
    email: string
    description: string
    password: string
    passwordConfirm: string
    state: string
    city: string
    address: string
    cep: string
    neighborhood: string
    region: string
    specialities: number []
}

export type Speciality = {
    id: number
    fullname: string
    logoPath: string
}

export type ContractorFormSchema = ContractorFields

export type FormSectionBaseProps = {
    control: Control<ContractorFormSchema>
    errors: FieldErrors<ContractorFormSchema>
}
