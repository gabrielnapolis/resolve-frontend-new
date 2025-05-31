export type GetContractorColumnsListResponse = {
    list: ContractorColumns[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: string[]
}

export type ContractorColumns = {
    id: number
    img: string
    picture: string
    fullname: string
    email: string
    fone: string
    address: string
    city: string
    state: string
    active: boolean
    specialities: {
        id: number
        speciality: {
            id: number
            fullname: string
        }
    }[]
}

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