import { GetContractorColumnsListResponse } from '@/views/adm/Dashboard/DashboardContractor/types'
import ApiService from './ApiService'
import type { TableQueries } from '@/@types/common'

interface ContractorParams extends TableQueries {
    filters?: {
        specialities?: string[]
        status?: 'active' | 'inactive'
        search?: string
    }
}

export async function apiGetContractorsList<T, GetContractorColumnsListResponse>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/contractor',
        method: 'get',
    })
}   