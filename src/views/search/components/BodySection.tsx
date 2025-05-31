
import { useEffect, useState } from 'react'
import Container from '@/components/shared/Container'
import Loading from '@/components/shared/Loading'
import CardContractor from './CardContractor'
import { apiGetContractorsList } from '@/services/SearchService'
import type { ContractorOverview } from '../types'

const BodySection = () => {
    const [contractors, setContractors] = useState<ContractorOverview[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContractors = async () => {
            try {
                setLoading(true)
                const response = await apiGetContractorsList()
                setContractors(response)
            } catch (error) {
                console.error('Erro ao carregar contractors:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchContractors()
    }, [])

    if (loading) {
        return (
            <div className="my-12">
                <Container>
                    <div className="flex justify-center items-center py-20">
                        <Loading loading={true} />
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="my-12">
            <Container>
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Prestadores Disponíveis
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Encontre o profissional ideal para o seu projeto
                        </p>
                    </div>
                    
                    {contractors.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {contractors.map((contractor) => (
                                <CardContractor
                                    key={contractor.id}
                                    contractor={contractor}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                                Nenhum prestador encontrado
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Tente ajustar os filtros de busca
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default BodySection
