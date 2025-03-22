import { useRef } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/shared/Container'
import { useHelpCenterStore } from '../store/helpCenterStore'
import { TbSearch, TbAdjustments } from 'react-icons/tb'
import SearchFilter from './SearchFilter'

const TopSection = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const setQueryText = useHelpCenterStore((state) => state.setQueryText)
    const setSelectedTopic = useHelpCenterStore(
        (state) => state.setSelectedTopic,
    )

    const handleSetQueryText = () => {
        const value = inputRef.current?.value

        if (value) {
            setQueryText(value)
            setSelectedTopic('')
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
                    <Button className="rounded-full text-sm font-normal hover:bg-gray-100">
                        Pintura
                    </Button>
                    <Button className="rounded-full text-sm font-normal hover:bg-gray-100">
                        Marcenaria
                    </Button>
                    <Button className="rounded-full text-sm font-normal hover:bg-gray-100">
                        Carpintaria
                    </Button>
                    <Button className="rounded-full text-sm font-normal hover:bg-gray-100">
                        Serviços Gerais
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default TopSection
