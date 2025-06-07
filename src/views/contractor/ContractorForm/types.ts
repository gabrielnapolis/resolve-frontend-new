import type { Control, FieldErrors } from 'react-hook-form'

export type ContractorFields = {
    id?: number
    picture: string
    fullname: string
    birthday?: string
    fone: string
    cpf: string
    email: string
    emailConfirm: string
    description?: string
    password: string
    passwordConfirm: string
    state: string
    city: string
    address: string
    cep?: string
    neighborhood: string
    specialities: number []
}

export type Speciality = {
    id: number
    fullname: string
}

export type ContractorFormSchema = ContractorFields

export type FormSectionBaseProps = {
    control: Control<ContractorFormSchema>
    errors: FieldErrors<ContractorFormSchema>
}
