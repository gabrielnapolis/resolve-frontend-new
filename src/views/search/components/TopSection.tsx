import { useRef, useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/shared/Container'
import { useHelpCenterStore } from '../store/helpCenterStore'
import { TbSearch } from 'react-icons/tb'
import SearchFilter from './SearchFilter'
import { getSpecialitys } from '@/services/SpecialityService'
import { apiGetContractorsList } from '@/services/ContractorService'
import { SpecialityFields } from '@/views/adm/Dashboard/DashboardSpeciality/types'

const TopSection = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [specialities, setSpecialities] = useState<SpecialityFields[]>([])
    const [selectedSpeciality, setSelectedSpeciality] = useState<number | null>(null)

    const setQueryText = useHelpCenterStore((state) => state.setQueryText)
    const setSelectedTopic = useHelpCenterStore(
        (state) => state.setSelectedTopic,
    )

    useEffect(() => {
        const fetchSpecialities = async () => {
            try {
                const data = await getSpecialitys()
                setSpecialities(data)
            } catch (error) {
                console.error('Erro ao carregar especialidades:', error)
            }
        }

        fetchSpecialities()
    }, [])

    const handleSetQueryText = async () => {
        const value = inputRef.current?.value

        if (value) {
            setQueryText(value)
            setSelectedTopic('')
            
            try {
                // Buscar todos os contractors e filtrar pelo texto
                const response = await apiGetContractorsList()
                const allContractors = response || []
                
                const filteredContractors = allContractors.filter(contractor =>
                    contractor.fullname.toLowerCase().includes(value.toLowerCase()) ||
                    contractor.description?.toLowerCase().includes(value.toLowerCase()) ||
                    contractor.city.toLowerCase().includes(value.toLowerCase()) ||
                    contractor.specialities?.some(spec => 
                        spec.speciality.fullname.toLowerCase().includes(value.toLowerCase())
                    )
                )
                
                window.dispatchEvent(new CustomEvent('searchFiltered', { 
                    detail: { contractors: filteredContractors } 
                }))
            } catch (error) {
                console.error('Erro ao filtrar contractors por busca:', error)
            }
        } else {
            // Se não há texto, recarregar todos os contractors
            try {
                const response = await apiGetContractorsList()
                const allContractors = response || []
                window.dispatchEvent(new CustomEvent('searchFiltered', { 
                    detail: { contractors: allContractors } 
                }))
            } catch (error) {
                console.error('Erro ao recarregar contractors:', error)
            }
        }
    }

    const handleSpecialityFilter = async (specialityId: number ) => {
        try {
            setSelectedSpeciality(specialityId)
            
            // Buscar todos os contractors e filtrar pela especialidade
            const response = await apiGetContractorsList()
            const allContractors = response || []
            
            const filteredContractors = allContractors.filter(contractor =>
                contractor.specialities?.some(spec => spec.speciality.id === specialityId)
            )

            window.dispatchEvent(new CustomEvent('contractorsFiltered', { 
                detail: { contractors: filteredContractors, specialityId } 
            }))
        } catch (error) {
            console.error('Erro ao filtrar por especialidade:', error)
        }
    }

    const handleClearFilters = async () => {
        try {
            if (inputRef.current) {
                inputRef.current.value = ''
            }
            setQueryText('')
            
            const response = await apiGetContractorsList()
            const allContractors = response || []
            
            window.dispatchEvent(new CustomEvent('contractorsFiltered', { 
                detail: { contractors: allContractors } 
            }))
        } catch (error) {
            console.error('Erro ao limpar filtros:', error)
        }
    }

    return (
        <section className="flex flex-col justify-center h-[550px] bg-gradient-to-tr from-cyan-100 via-violet-100 to-fuchsia-100 dark:from-cyan-500 dark:via-violet-500 dark:to-fuchsia-500">
            <Container className="flex flex-col items-center px-4">
                <div className="mb-6 flex flex-col items-center">
                    <h2 className="text-center">
                        <img
                            className="w-[220px] h-[220px]"
                            src="/img/logo/logo2.png"
                            alt="Logo"
                        />
                    </h2>
                    <p className="max-w-[355px] dark:text-gray-200 text-center">
                        Encontre profissionais qualificados para sua
                        necessidade!
                    </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl min-h-[50px] px-3 flex flex-col bg-white max-w-[800px] w-full">
                    <div className="flex items-center gap-2 w-full h-[56px]">
                        <input
                            ref={inputRef}
                            className="flex-1 h-full placeholder:text-gray-400 placeholder:font-semibold font-semibold bg-transparent focus:outline-none heading-text"
                            placeholder="Digite sua busca"
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSetQueryText()
                                }
                                if (
                                    event.key === 'Backspace' &&
                                    (event.target as HTMLInputElement).value
                                        .length <= 1
                                ) {
                                    setQueryText('')
                                    handleClearFilters()
                                }
                            }}
                        />
                        <SearchFilter />
                        <Button
                            size="xs"
                            shape="circle"
                            variant="solid"
                            icon={<TbSearch />}
                            onClick={handleSetQueryText}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 bg-transparent">
                    {specialities.map((speciality) => (
                        <Button 
                            key={speciality.id}
                            className={`rounded-full text-sm font-normal hover:bg-gray-100 ${
                                selectedSpeciality === speciality.id 
                                    ? 'bg-primary text-white' 
                                    : ''
                            }`}
                            onClick={() => {
                                if (selectedSpeciality === speciality.id) {
                                    // Se já está selecionado, limpar filtro
                                    setSelectedSpeciality(null)
                                    handleClearFilters()
                                } else {
                                    handleSpecialityFilter(speciality.id)
                                }
                            }}
                        >
                            {speciality.fullname}
                        </Button>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default TopSection
