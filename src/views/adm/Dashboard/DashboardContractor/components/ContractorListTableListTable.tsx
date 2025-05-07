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
import useContractorList from '../hooks/useContractorList'
import { ContractorColumns } from '../types'


type ContractorTableProps = {
    data: ContractorColumns[]
    className?: string
} 
const statusColor: Record<string, string> = {
    active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
    blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
}

const NameColumn = ({ row }: { row: ContractorColumns }) => {
    return (
        <div className="flex items-center">
            <Avatar size={40} shape="circle" src={'/img/default-avatar.png'} />
            <Link
                className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
                to={`/concepts/customers/customer-details/${row.id}`}
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
            <Tooltip title="Editar">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onEdit}
                >
                    <TbPencil />
                </div>
            </Tooltip>
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

const ContractorListTable = () => {
    
    const navigate = useNavigate()

    const {
        contractorList,
        contractorListTotal,
        tableData,
        isLoading,
        setTableData,
        setSelectAllContractor,
        setSelectedContractor,
        selectedContractor,
    } = useContractorList()
    
    const handleEdit = (contractor: ContractorColumns) => {
        
    }

    const handleViewDetails = (contractor: ContractorColumns) => {
       
    }

    const columns: ColumnDef<ContractorColumns>[] = useMemo(
        () => [
            {
                header: 'Nome',
                accessorKey: 'name',
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
                header: 'Endereço',
                accessorKey: 'address',
            },
            {
                header: 'Status',
                accessorKey: 'status',
                cell: (props) => {
                    const row = props.row.original
                    return (
                        <div className="flex items-center">
                            <Tag className={row.active ? statusColor.active : statusColor.blocked}>
                                <span className="capitalize">{row.active ? 'Ativo' : 'Inativo'}</span>
                            </Tag>
                        </div>
                    )
                },
            },
            {
                header: 'Ações',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onViewDetail={() =>
                            handleViewDetails(props.row.original)
                        }
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
        if (selectedContractor.length > 0) {
            setSelectAllContractor([])
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

    const handleRowSelect = (checked: boolean, row: ContractorColumns) => {
        setSelectedContractor(checked, row as ContractorColumns)
    }

    const handleAllRowSelect = (checked: boolean, rows: Row<ContractorColumns>[]) => {
        if (checked) {
            const originalRows = rows.map((row) => row.original)
            setSelectAllContractor(originalRows)
        } else {
            setSelectAllContractor([])
        }
    }

    return (
        <DataTable
            selectable
            columns={columns}
            data={contractorList as ContractorColumns[]}
            noData={!isLoading && Array.isArray(contractorList) && contractorList.length === 0}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            loading={isLoading}
            pagingData={{
                total: contractorListTotal,
                pageIndex: tableData.pageIndex as number,
                pageSize: tableData.pageSize as number,
            }}
            checkboxChecked={(row) =>
                selectedContractor.some((selected) => selected.id === row.id)
            }
            onPaginationChange={handlePaginationChange}
            onSelectChange={handleSelectChange}
            onSort={handleSort}
            onCheckBoxChange={handleRowSelect}
            onIndeterminateCheckBoxChange={handleAllRowSelect}
        />
    )
}

export default ContractorListTable
