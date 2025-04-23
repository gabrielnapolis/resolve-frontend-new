import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ContractorColumns, Filter } from '../types'

export const initialTableData: TableQueries = {
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

export const initialFilterData = {
    purchasedProducts: '',
    purchaseChannel: [
        'Retail Stores',
        'Online Retailers',
        'Resellers',
        'Mobile Apps',
        'Direct Sales',
    ],
}

export type ContractorListState = {
    tableData: TableQueries
    filterData: Filter
    selectedContractor: Partial<ContractorColumns>[]
}

type ContractorListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedContractor: (checked: boolean, customer: ContractorColumns) => void
    setSelectAllContractor: (customer: ContractorColumns[]) => void
}

const initialState: ContractorListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedContractor: [],
}

export const useContractorListStore = create<
    ContractorListState & ContractorListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedContractor: (checked, row) =>
        set((state) => {
            const prevData = state.selectedContractor
            if (checked) {
                return { selectedContractor: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomer) => row.id === prevCustomer.id)
                ) {
                    return {
                        selectedCustomer: prevData.filter(
                            (prevCustomer) => prevCustomer.id !== row.id,
                        ),
                    }
                }
                return { selectedCustomer: prevData }
            }
        }),
        setSelectAllContractor: (row) => set(() => ({ selectedContractor: row })),
}))
