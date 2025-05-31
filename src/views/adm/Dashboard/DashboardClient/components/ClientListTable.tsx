import { useMemo } from 'react'
import Avatar from '@/components/ui/Avatar'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye, TbLock } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { TableQueries } from '@/@types/common'

import { ClientColumns } from '../types'
import useClientList from '../hooks/useClientList'


type ClientTableProps = {
    data: ClientColumns[]
    className?: string
}

const statusColor: Record<string, string> = {
    active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
}

const NameColumn = ({ row }: { row: ClientColumns }) => {
    return (
        <div className="flex items-center">
            <Avatar size={40} shape="circle" src={'/img/default-avatar.png'} />
            <Link
                className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
                to={`/concepts/clients/client-details/${row.id}`}
            >
                {row.fullname}
            </Link>
        </div>
    )
}

const ActionColumn = ({
    onEdit,
    onViewDetail,
}: {
    onEdit: () => void
    onViewDetail: () => void
}) => {
    return (
        <div className="flex gap-3">
            <Tooltip title="Visualizar">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onViewDetail}
                >
                    <TbEye />
                </div>
            </Tooltip>
            <Tooltip title="Bloquear">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onViewDetail}
                >
                    <TbLock />
                </div>
            </Tooltip>
        </div>
    )
}

const ClientListTable = () => {
    const navigate = useNavigate()

    const {
        clientList,
        clientListTotal,
        tableData,
        isLoading,
        setTableData,
        setSelectAllClient,
        setSelectedClient,
        selectedClient,
    } = useClientList()

    const handleEdit = (client: ClientColumns) => {
        // Implement edit logic
    }

    const handleViewDetails = (client: ClientColumns) => {
        navigate(`/client/detail/${client.id}`)
    }

    const columns: ColumnDef<ClientColumns>[] = useMemo(
        () => [
            {
                header: 'Nome',
                accessorKey: 'fullname',
                cell: (props) => {
                    const row = props.row.original
                    return <NameColumn row={row} />
                },
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            {
                header: 'Telefone',
                accessorKey: 'fone',
            },
            {
                header: 'Cidade',
                accessorKey: 'city',
            },
            {
                header: 'Estado',
                accessorKey: 'state',
            },
            {
                header: 'Ações',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onViewDetail={() => handleViewDetails(props.row.original)}
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
        if (selectedClient.length > 0) {
            setSelectAllClient([])
        }
    }

    const handlePaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        handleSetTableData(newTableData)
    }

    const handleSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        handleSetTableData(newTableData)
    }

    const handleSort = (sort: OnSortParam) => {
        const newTableData = cloneDeep(tableData)
        newTableData.sort = sort
        handleSetTableData(newTableData)
    }

    const handleRowSelect = (checked: boolean, row: ClientColumns) => {
        setSelectedClient(checked, row as ClientColumns)
    }

    const handleAllRowSelect = (checked: boolean, rows: Row<ClientColumns>[]) => {
        if (checked) {
            const originalRows = rows.map((row) => row.original)
            setSelectAllClient(originalRows)
        } else {
            setSelectAllClient([])
        }
    }

    return (
        <DataTable
            selectable
            columns={columns}
            data={clientList as ClientColumns[]}
            noData={!isLoading && Array.isArray(clientList) && clientList.length === 0}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            loading={isLoading}
            pagingData={{
                total: clientListTotal,
                pageIndex: tableData.pageIndex as number,
                pageSize: tableData.pageSize as number,
            }}
            checkboxChecked={(row) =>
                selectedClient.some((selected) => selected.id === row.id)
            }
            onPaginationChange={handlePaginationChange}
            onSelectChange={handleSelectChange}
            onSort={handleSort}
            onCheckBoxChange={handleRowSelect}
            onIndeterminateCheckBoxChange={handleAllRowSelect}
        />
    )
}

export default ClientListTable