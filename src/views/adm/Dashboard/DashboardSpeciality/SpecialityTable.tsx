import Table from '@/components/ui/Table'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table'
import { SpecialityFields } from './types'
import { Tooltip } from '@/components/ui/Tooltip'
import { TbPencil } from 'react-icons/tb'

export type SpecialityColumns = SpecialityFields

type SpecialityTableProps = {
    data: SpecialityColumns[]
    className?: string
}

const { Tr, Th, Td, THead, TBody } = Table

const columnHelper = createColumnHelper<SpecialityColumns>()

const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        cell: (props) => <span className="font-bold">{props.getValue()}</span>,
    }),
    columnHelper.accessor('fullname', {
        header: 'Nome   ',
        cell: (props) => (
            <span className="font-semibold">{props.getValue()}</span>
        ),
    }),
    columnHelper.display({
        id: 'actions',
        header: 'Ações',
        cell: (props) => (
            <ActionColumn
                onEdit={() => console.log('Edit')}
            />
        ),
    }),
]

const ActionColumn = ({
    onEdit,
}: {
    onEdit: () => void
}) => {
    return (
        <div className="flex items-center gap-3">
            <Tooltip title="Editar">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onEdit}
                >
                    <TbPencil />
                </div>
            </Tooltip>
        </div>
    )
}

const SpecialityTable = ({ data = [], ...rest }: SpecialityTableProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div {...rest}>
            <Table>
                <THead className="!bg-transparent">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Th key={header.id} colSpan={header.colSpan}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.length === 0 ? (
                        <Tr>
                            <Td
                                colSpan={columns.length}
                                className="text-center py-4"
                            >
                                Nenhum dado disponível.
                            </Td>
                        </Tr>
                    ) : (
                        table.getRowModel().rows.map((row) => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <Td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </Td>
                                ))}
                            </Tr>
                        ))
                    )}
                </TBody>
            </Table>
        </div>
    )
}

export default SpecialityTable
