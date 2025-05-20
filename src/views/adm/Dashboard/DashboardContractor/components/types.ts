import type { Control, FieldErrors } from 'react-hook-form'
import { SpecialityFields } from '../../DashboardSpeciality/types'

export type ContractorFields = {
    id?: number
    picture: string
    fullname: string
    birthday: string
    cpf: string
    email: string
    commercialName: string
    description: string
    password: string
    cep: string
    address: string
    state: string
    city: string
    neighborhood: string
    region: string
    specialities: SpecialityFields[]
    isAdmin: boolean
    active: boolean
}

export type ContractorFormSchema = ContractorFields

export type FormSectionBaseProps = {
    control: Control<ContractorFormSchema>
    errors: FieldErrors<ContractorFormSchema>
}
