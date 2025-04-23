import useContractorList from '../hooks/useContractorList'
import ContractorListSearch from './ContractorListSearch'
import ContractorListTableFilter from './ContractorListTableFilter'
import cloneDeep from 'lodash/cloneDeep'

const ContractorListTableTools = () => {
    const { tableData, setTableData } = useContractorList()

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
            <ContractorListSearch onInputChange={handleInputChange} />
            <ContractorListTableFilter />
        </div>
    )
}

export default ContractorListTableTools
