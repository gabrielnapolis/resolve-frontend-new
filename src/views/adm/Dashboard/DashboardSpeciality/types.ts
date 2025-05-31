import type { Control, FieldErrors } from 'react-hook-form'

export type SpecialityFields = {
    id?: number
    fullname: string
}

export type SpecialityFormSchema = SpecialityFields

export type FormSectionBaseProps = {
    control: Control<SpecialityFormSchema>
    errors: FieldErrors<SpecialityFormSchema>
}
export interface SpecialityFields {
    id: number
    fullname: string
    logoPath?: string
}

export interface SpecialityFormSchema {
    id?: number
    fullname: string
    logoPath?: string
}
