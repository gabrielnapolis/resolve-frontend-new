import { GetContractorColumnsListResponse } from '@/views/adm/Dashboard/DashboardContractor/types'
import ApiService from './ApiService'
import type { TableQueries } from '@/@types/common'
import { SpecialityFields } from '@/views/adm/Dashboard/DashboardSpeciality/types'

interface ContractorParams extends TableQueries {
    filters?: {
        specialities?: string[]
        status?: 'active' | 'inactive'
        search?: string
    }
}

export async function apiGetContractorsList<T = GetContractorColumnsListResponse>(): Promise<T> {
    return ApiService.fetchDataWithAxios<T>({
        url: '/contractor',
        method: 'get',
    })
}

export async function apiGetSpecialityList<T = SpecialityFields[]>(): Promise<T> {
    return ApiService.fetchDataWithAxios<T>({
        url: '/speciality',
        method: 'get',
    })
}

export async function apiCreateContractor<T = any>(data: any): Promise<T> {
    return ApiService.fetchDataWithAxios<T>({
        url: '/contractor',
        method: 'post',
        data,
    })
}