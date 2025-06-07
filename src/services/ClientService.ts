import ApiService from './ApiService'

export async function apiGetClientList<T, GetClientColumnsListResponse>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/client',
        method: 'get',
    })
}

export async function apiGetClientById<T>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/client/${id}`,
        method: 'get',
    })
}

export async function apiCreateClient<T>(data: {
    fullname: string
    email: string
    password: string
    birthday: string
    cpf: string
}) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/client',
        method: 'post',
        data
    })
}   