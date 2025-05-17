import useSWR from 'swr'

import type { GetClientColumnsListResponse } from '../types'
import type { TableQueries } from '@/@types/common'
import { apiGetClientList } from '@/services/ClientService'
import { useClientListStore } from '../store/clientListStore'

export default function useClientList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedClient,
        setSelectedClient,
        setSelectAllClient,
        setFilterData,
    } = useClientListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetClientList<GetClientColumnsListResponse, TableQueries>(),
        {
            revalidateOnFocus: false,
        },
    )

    console.log('clientList', data)
    const clientList = data || []

    const clientListTotal = data?.total || 0

    return {
        clientList,
        clientListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedClient,
        setSelectedClient,
        setSelectAllClient,
        setFilterData,
    }
}