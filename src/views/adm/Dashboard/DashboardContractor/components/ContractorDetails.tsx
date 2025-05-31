
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { Tag } from '@/components/ui/Tag'
import { Card } from '@/components/ui/Card'
import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Loading from '@/components/shared/Loading'
import { apiGetContractorById } from '@/services/ContractorService'
import { ContractorDetailResponse } from '../types'
import { HiOutlineUser, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineArrowLeft } from 'react-icons/hi'
import { formatCPF, formatDate, formatPhoneNumber } from '@/utils/formatMask'

const ContractorDetails = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [contractor, setContractor] = useState<ContractorDetailResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchContractor = async () => {
            if (!id) return
            
            try {
                setLoading(true)
                const response = await apiGetContractorById<ContractorDetailResponse>(id)
                setContractor(response)
            } catch (err) {
                setError('Erro ao carregar dados do prestador')
                console.error('Error fetching contractor:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchContractor()
    }, [id])

    if (loading) {
        return (
            <Container>
                <AdaptiveCard>
                    <Loading loading={true} />
                </AdaptiveCard>
            </Container>
        )
    }

    if (error || !contractor) {
        return (
            <Container>
                <AdaptiveCard>
                    <div className="text-center py-8">
                        <p className="text-red-500">{error || 'Prestador não encontrado'}</p>
                        <Button 
                            className="mt-4" 
                            onClick={() => navigate('/adm/dashboard/contractor')}
                        >
                            Voltar para listagem
                        </Button>
                    </div>
                </AdaptiveCard>
            </Container>
        )
    }

    return (
        <Container>
            <div className="flex flex-col gap-4">
                {/* Header */}
                <AdaptiveCard>
                    <div className="flex items-center gap-4 mb-6">
                        <Button 
                            variant="plain" 
                            size="sm" 
                            icon={<HiOutlineArrowLeft />}
                            onClick={() => navigate('/adm/dashboard/contractor')}
                        >
                            Voltar
                        </Button>
                        <h3 className="text-lg font-semibold">Detalhes do Prestador</h3>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-start gap-6">
                        <Avatar 
                            size={120} 
                            shape="circle" 
                            src={contractor.picture || '/img/default-avatar.png'}
                            icon={<HiOutlineUser />}
                            className="border-4 border-white bg-gray-100 text-gray-300 shadow-lg"
                        />
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {contractor.fullname}
                                </h2>
                                <Tag className={contractor.active ? 'bg-emerald-200 text-gray-900' : 'bg-red-200 text-gray-900'}>
                                    {contractor.active ? 'Ativo' : 'Inativo'}
                                </Tag>
                            </div>
                            {contractor.description && (
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {contractor.description}
                                </p>
                            )}
                            <div className="flex flex-wrap gap-2">
                                {contractor.specialities.map((spec) => (
                                    <Tag key={spec.id} className="bg-blue-100 text-blue-800">
                                        {spec.speciality.fullname}
                                    </Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                </AdaptiveCard>

                {/* Contact Information */}
                <AdaptiveCard>
                    <h4 className="text-lg font-semibold mb-4">Informações de Contato</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <HiOutlineMail className="text-gray-500 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{contractor.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <HiOutlinePhone className="text-gray-500 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">Telefone</p>
                                <p className="font-medium">{formatPhoneNumber(contractor.fone)}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <HiOutlineCalendar className="text-gray-500 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">Data de Nascimento</p>
                                <p className="font-medium">{formatDate(contractor.birthday)}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <HiOutlineUser className="text-gray-500 text-xl" />
                            <div>
                                <p className="text-sm text-gray-500">CPF</p>
                                <p className="font-medium">{formatCPF(contractor.cpf)}</p>
                            </div>
                        </div>
                    </div>
                </AdaptiveCard>

                {/* Address Information */}
                <AdaptiveCard>
                    <h4 className="text-lg font-semibold mb-4">Endereço</h4>
                    <div className="flex items-start gap-3">
                        <HiOutlineLocationMarker className="text-gray-500 text-xl mt-1" />
                        <div className="flex-1">
                            <p className="font-medium">{contractor.address}</p>
                            <p className="text-gray-600">
                                {contractor.neighborhood}, {contractor.city} - {contractor.state}
                            </p>
                            {contractor.cep && (
                                <p className="text-gray-600">CEP: {contractor.cep}</p>
                            )}
                            {contractor.region && (
                                <p className="text-gray-600">Região: {contractor.region}</p>
                            )}
                        </div>
                    </div>
                </AdaptiveCard>

                {/* Specialities */}
                {contractor.specialities.length > 0 && (
                    <AdaptiveCard>
                        <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
                        <div className="flex flex-wrap gap-3">
                            {contractor.specialities.map((spec) => (
                                <div key={spec.id} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                                    <p className="font-medium text-blue-800 dark:text-blue-200">
                                        {spec.speciality.fullname}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AdaptiveCard>
                )}
            </div>
        </Container>
    )
}

export default ContractorDetails
