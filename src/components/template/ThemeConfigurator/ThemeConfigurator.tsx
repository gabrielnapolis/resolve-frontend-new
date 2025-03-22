import ModeSwitcher from './ModeSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

export type ThemeConfiguratorProps = {
    callBackClose?: () => void
}

const ThemeConfigurator = ({ callBackClose }: ThemeConfiguratorProps) => {
    return (
        <div className="flex flex-col h-34 justify-between">
            <div className="flex flex-col gap-y-10 mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h6>Modo Escuro</h6>
                        <span>Mudar para o tema escuro</span>
                    </div>
                    <ModeSwitcher />
                </div>
                <div>
                    <h6 className="mb-3">Cores do Tema</h6>
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}

export default ThemeConfigurator
