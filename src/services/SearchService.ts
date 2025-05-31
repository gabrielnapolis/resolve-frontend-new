
import ApiService from './ApiService'
import type { ContractorOverview } from '@/views/search/types'

// Mock data para contractors
const mockContractors: ContractorOverview[] = [
    {
        id: 1,
        picture: '/img/default-avatar.png',
        fullname: 'João Silva',
        fone: '62991395688',
        email: 'joao.silva@gmail.com',
        description: 'Profissional experiente em pintura residencial e comercial com mais de 10 anos de experiência.',
        state: 'Goiás',
        city: 'Goiânia',
        adress: 'Rua das Flores, 123',
        cep: '74000-000',
        neighborhood: 'Centro',
        specialities: [
            {
                speciality: {
                    id: 1,
                    fullname: 'Pintura',
                    logoPath: '/img/default-tools.png'
                }
            }
        ]
    },
    {
        id: 2,
        picture: '/img/default-avatar.png',
        fullname: 'Maria Santos',
        fone: '62987654321',
        email: 'maria.santos@gmail.com',
        description: 'Especialista em marcenaria personalizada, móveis sob medida e restauração de móveis antigos.',
        state: 'Goiás',
        city: 'Anápolis',
        adress: 'Av. Brasil, 456',
        cep: '75000-000',
        neighborhood: 'Jardim América',
        specialities: [
            {
                speciality: {
                    id: 2,
                    fullname: 'Marcenaria',
                    logoPath: '/img/default-tools.png'
                }
            }
        ]
    },
    {
        id: 3,
        picture: '/img/default-avatar.png',
        fullname: 'Carlos Oliveira',
        fone: '62912345678',
        email: 'carlos.oliveira@gmail.com',
        description: 'Eletricista certificado, especializado em instalações residenciais e comerciais.',
        state: 'Goiás',
        city: 'Aparecida de Goiânia',
        adress: 'Rua das Palmeiras, 789',
        cep: '74900-000',
        neighborhood: 'Setor Central',
        specialities: [
            {
                speciality: {
                    id: 3,
                    fullname: 'Elétrica',
                    logoPath: '/img/default-tools.png'
                }
            }
        ]
    },
    {
        id: 4,
        picture: '/img/default-avatar.png',
        fullname: 'Ana Costa',
        fone: '62998765432',
        email: 'ana.costa@gmail.com',
        description: 'Encanadora experiente em reparos, instalações e manutenção hidráulica.',
        state: 'Goiás',
        city: 'Goiânia',
        adress: 'Rua dos Ipês, 321',
        cep: '74100-000',
        neighborhood: 'Setor Oeste',
        specialities: [
            {
                speciality: {
                    id: 4,
                    fullname: 'Hidráulica',
                    logoPath: '/img/default-tools.png'
                }
            }
        ]
    }
]

export async function apiGetContractorsList<T = ContractorOverview[]>(): Promise<T> {
    // Simula uma chamada de API com delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockContractors as T)
        }, 500)
    })
}

export async function apiSearchContractors<T = ContractorOverview[]>(params?: {
    search?: string;
    speciality?: string;
    location?: string;
}): Promise<T> {
    // Simula busca com filtros
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredContractors = [...mockContractors]
            
            if (params?.search) {
                filteredContractors = filteredContractors.filter(contractor =>
                    contractor.fullname.toLowerCase().includes(params.search!.toLowerCase()) ||
                    contractor.description.toLowerCase().includes(params.search!.toLowerCase())
                )
            }
            
            if (params?.speciality) {
                filteredContractors = filteredContractors.filter(contractor =>
                    contractor.specialities.some(spec => 
                        spec.speciality.fullname.toLowerCase().includes(params.speciality!.toLowerCase())
                    )
                )
            }
            
            if (params?.location) {
                filteredContractors = filteredContractors.filter(contractor =>
                    contractor.city.toLowerCase().includes(params.location!.toLowerCase()) ||
                    contractor.state.toLowerCase().includes(params.location!.toLowerCase())
                )
            }
            
            resolve(filteredContractors as T)
        }, 500)
    })
}

export async function apiSearchContractorsBySpeciality<T = ContractorOverview[]>(specialityId: number): Promise<T> {
    // Simula busca com filtro por ID da especialidade
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredContractors = mockContractors.filter(contractor =>
                contractor.specialities.some(spec => spec.speciality.id === specialityId)
            )
            
            resolve(filteredContractors as T)
        }, 500)
    })
}
