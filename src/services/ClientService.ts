import ApiService from './ApiService'

export async function apiGetClientList<T, GetClientColumnsListResponse>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/client',
        method: 'get',
    })
}   