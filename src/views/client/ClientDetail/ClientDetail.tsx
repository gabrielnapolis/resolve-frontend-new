
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import Avatar from '@/components/ui/Avatar'
import { apiGetClientById } from '@/services/ClientService'
import type { ClientColumns } from '@/views/adm/Dashboard/DashboardClient/types'

const ClientDetail = () => {
    const { id } = useParams<{ id: string }>()

    const { data, error, isLoading } = useSWR(
        id ? `client-${id}` : null,
        () => apiGetClientById<ClientColumns>(id!),
        {
            revalidateOnFocus: false,
        }
    )

    if (isLoading) {
        return (
            <Container>
                <AdaptiveCard>
                    <div className="flex items-center justify-center h-64">
                        <div>Carregando...</div>
                    </div>
                </AdaptiveCard>
            </Container>
        )
    }

    if (error || !data) {
        return (
            <Container>
                <AdaptiveCard>
                    <div className="flex items-center justify-center h-64">
                        <div>Cliente não encontrado</div>
                    </div>
                </AdaptiveCard>
            </Container>
        )
    }

    return (
        <Container>
            <AdaptiveCard>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <Avatar 
                            size={80} 
                            shape="circle" 
                            src={'/img/default-avatar.png'} 
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{data.fullname}</h2>
                            <p className="text-gray-600">{data.email}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Informações Pessoais</h3>
                            <div className="space-y-2">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Nome Completo</label>
                                    <p className="text-gray-900">{data.fullname}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Email</label>
                                    <p className="text-gray-900">{data.email}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Telefone</label>
                                    <p className="text-gray-900">{data.fone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Endereço</h3>
                            <div className="space-y-2">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Cidade</label>
                                    <p className="text-gray-900">{data.city}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Estado</label>
                                    <p className="text-gray-900">{data.state}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default ClientDetail
