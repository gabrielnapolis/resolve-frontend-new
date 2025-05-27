export type GetContractorColumnsListResponse = {
    list: ContractorColumns[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
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
