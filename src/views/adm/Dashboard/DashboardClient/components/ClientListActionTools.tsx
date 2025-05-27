import { useNavigate } from 'react-router-dom'
import useClientList from '../hooks/useClientList'
import Button from '@/components/ui/Button'
import { TbUserPlus } from 'react-icons/tb'

const ClientListActionTools = () => {
    const navigate = useNavigate()

    const { clientList } = useClientList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            {/* <CSVLink
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
            </CSVLink> */}
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/create-client')}
            >
                Adicionar Novo
            </Button>
        </div>
    )
}

export default ClientListActionTools