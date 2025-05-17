import useClientList from '../hooks/useClientList'
import ClientListSearch from './ClientListSearch'
import cloneDeep from 'lodash/cloneDeep'

const ClientListTableTools = () => {
    const { tableData, setTableData } = useClientList()

    const handleInputChange = (val: string) => {
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if (typeof val === 'string' && val.length > 1) {
            setTableData(newTableData)
        }

        if (typeof val === 'string' && val.length === 0) {
            setTableData(newTableData)
        }
    }

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <ClientListSearch onInputChange={handleInputChange} />
        </div>
    )
}

export default ClientListTableTools
