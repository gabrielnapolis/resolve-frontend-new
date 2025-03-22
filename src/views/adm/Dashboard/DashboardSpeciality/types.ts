import type { Control, FieldErrors } from 'react-hook-form'

export type SpecialityFields = {
    id?: number
    fullname: string
    logoPath?: string
}

export type SpecialityFormSchema = SpecialityFields

export type FormSectionBaseProps = {
    control: Control<SpecialityFormSchema>
    errors: FieldErrors<SpecialityFormSchema>
}
