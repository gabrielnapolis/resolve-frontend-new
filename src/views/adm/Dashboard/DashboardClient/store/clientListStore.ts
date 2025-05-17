import { create } from 'zustand'
import type { TableQueries } from '@/@types/common'
import type { ClientColumns, Filter } from '../types'

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

export type ClientListState = {
    tableData: TableQueries
    filterData: Filter
    selectedClient: Partial<ClientColumns>[]
}

type ClientListAction = {
    setFilterData: (payload: Filter) => void
    setTableData: (payload: TableQueries) => void
    setSelectedClient: (checked: boolean, customer: ClientColumns) => void
    setSelectAllClient: (customer: ClientColumns[]) => void
}

const initialState: ClientListState = {
    tableData: initialTableData,
    filterData: initialFilterData,
    selectedClient: [],
}

export const useClientListStore = create<
    ClientListState & ClientListAction
>((set) => ({
    ...initialState,
    setFilterData: (payload) => set(() => ({ filterData: payload })),
    setTableData: (payload) => set(() => ({ tableData: payload })),
    setSelectedClient: (checked, row) =>
        set((state) => {
            const prevData = state.selectedClient
            if (checked) {
                return { selectedClient: [...prevData, ...[row]] }
            } else {
                if (
                    prevData.some((prevCustomer) => row.id === prevCustomer.id)
                ) {
                    return {
                        selectedClient: prevData.filter(
                            (prevCustomer) => prevCustomer.id !== row.id,
                        ),
                    }
                }
                return { selectedClient: prevData }
            }
        }),
    setSelectAllClient: (row) => set(() => ({ selectedClient: row })),
}))