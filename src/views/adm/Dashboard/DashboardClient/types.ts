export type GetClientColumnsListResponse = {
    list: ClientColumns[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type ClientColumns = {
    id: number
    fullname: string
    email: string
    fone: string
    state: string
    city: string
}
