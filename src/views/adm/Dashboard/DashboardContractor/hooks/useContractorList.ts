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
        ['/api/customers', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetContractorsList(params),
        {
            revalidateOnFocus: false,
        },
    )

    const contractorList = data?.list || []

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
