export type GetContractorColumnsListResponse = {
    list: ContractorColumns[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type ContractorColumns = {
    id: string
    name: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    address: string
    img: string
    role: string
    status: number
}
