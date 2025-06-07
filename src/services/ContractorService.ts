import ApiService from './ApiService'
import type { TableQueries } from '@/@types/common'
import { SpecialityFields } from '@/views/adm/Dashboard/DashboardSpeciality/types'
import { ContractorOverview } from '@/views/search/types'

interface ContractorParams extends TableQueries {
    filters?: {
        specialities?: string[]
        status?: 'active' | 'inactive'
        search?: string
    }
}

export async function apiGetContractorsList<T = ContractorOverview[]>(): Promise<T> {
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

export async function apiGetContractorById<T = any>(id: string | number): Promise<T> {
    return ApiService.fetchDataWithAxios<T>({
        url: `/contractor/${id}`,
        method: 'get',
    })
}