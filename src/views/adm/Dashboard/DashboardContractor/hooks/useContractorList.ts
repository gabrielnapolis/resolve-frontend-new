import useSWR from 'swr'
import { useContractorListStore } from '../store/contractorListStore'
import type { GetContractorColumnsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'
import { apiGetContractorsList } from '@/services/ContractorService'

export default function useContractorList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedContractor,
        setSelectedContractor,
        setSelectAllContractor,
        setFilterData,
    } = useContractorListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetContractorsList<GetContractorColumnsListResponse, TableQueries>(),
        {
            revalidateOnFocus: false,
        },
    )

    console.log('contractorList', data);
    const contractorList = data || []

    const contractorListTotal = data?.total || 0

    return {
        contractorList,
        contractorListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedContractor,
        setSelectedContractor,
        setSelectAllContractor,
        setFilterData,
    }
}
