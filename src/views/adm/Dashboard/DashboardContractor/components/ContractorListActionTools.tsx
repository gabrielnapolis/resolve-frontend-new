import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useContractorList from '../hooks/useContractorList'
import { CSVLink } from 'react-csv'

const ContractorListActionTools = () => {
    const navigate = useNavigate()

    const { contractorList } = useContractorList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="customerList.csv"
                data={contractorList}
            >
                <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    Download
                </Button>
            </CSVLink>
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/customers/customer-create')}
            >
                Adicionar Novo
            </Button>
        </div>
    )
}

export default ContractorListActionTools
