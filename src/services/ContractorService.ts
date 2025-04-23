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

export async function apiGetContractorsList(
    params: ContractorParams
): Promise<GetContractorColumnsListResponse> {
    return ApiService.fetchDataWithAxios({
        url: '/contractor',
        method: 'get',
        params: {
            page: params.pageIndex,
            limit: params.pageSize,
            search: params.query,
            ...params.filters
        }
    })
}