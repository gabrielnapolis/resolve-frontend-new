import { ContractorOverview } from "@/views/search/types"



export type ContractorDetailResponse = {
    id: number
    picture: string
    fullname: string
    cpf: string
    email: string
    fone: string
    birthday: string
    commercialName: string | null
    description: string
    password: string
    state: string
    cep: string
    address: string
    city: string
    neighborhood: string
    region: string
    isAdmin: boolean | null
    active: boolean
    subscriberId: number | null
    facebookId: string | null
    specialities: Array<{
        id: number
        speciality: {
            id: number
            fullname: string
        }
    }>
}