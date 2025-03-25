import Menu from '@/components/ui/Menu'
import ScrollBar from '@/components/ui/ScrollBar'
import { useSettingsStore } from '../store/settingsStore'
import useQuery from '@/utils/hooks/useQuery'
import {
    TbUserSquare,
    TbFileDollar,
    TbHammer,
    TbBook,
    TbAlignBoxLeftTop,
} from 'react-icons/tb'
import type { View } from '../types'
import type { ReactNode } from 'react'

const { MenuItem } = Menu

const menuList: { label: string; value: View; icon: ReactNode }[] = [
    { label: 'Painel', value: 'profile', icon: <TbAlignBoxLeftTop /> },
    { label: 'Clientes', value: 'security', icon: <TbUserSquare /> },
    { label: 'Prestadores', value: 'notification', icon: <TbHammer /> },
    { label: 'Cadastro de Especialidades', value: 'billing', icon: <TbBook /> },
    { label: 'Gerenciador de Pagamentos', value: 'integration', icon: <TbFileDollar /> },
]

export const SettingsMenu = ({ onChange }: { onChange?: () => void }) => {
    const query = useQuery()

    const { currentView, setCurrentView } = useSettingsStore()

    const currentPath = query.get('category') || query.get('label') || 'inbox'

    const handleSelect = (value: View) => {
        setCurrentView(value)
        onChange?.()
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <ScrollBar className="h-full overflow-y-auto">
                <Menu className="mx-2 mb-10">
                    {menuList.map((menu) => (
                        <MenuItem
                            key={menu.value}
                            eventKey={menu.value}
                            className={`mb-2 ${
                                currentView === menu.value
                                    ? 'bg-gray-100 dark:bg-gray-700'
                                    : ''
                            }`}
                            isActive={currentPath === menu.value}
                            onSelect={() => handleSelect(menu.value)}
                        >
                            <span className="text-2xl ltr:mr-2 rtl:ml-2">
                                {menu.icon}
                            </span>
                            <span>{menu.label}</span>
                        </MenuItem>
                    ))}
                </Menu>
            </ScrollBar>
        </div>
    )
}

export default SettingsMenu
