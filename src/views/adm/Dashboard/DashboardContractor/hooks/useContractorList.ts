import useSWR from 'swr'
import { useContractorListStore } from '../store/contractorListStore'
import { apiGetContractorsList } from '@/services/ContractorService'
import { ContractorOverview } from '@/views/search/types'

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
            apiGetContractorsList<ContractorOverview>(),
        {
            revalidateOnFocus: false,
        },
    )

    console.log('contractorList', data);
    const contractorList = data || []

    const contractorListTotal =  0

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
