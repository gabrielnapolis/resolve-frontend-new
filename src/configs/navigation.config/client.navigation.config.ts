import type { NavigationTree } from '@/@types/navigation'
import { NAV_ITEM_TYPE_ITEM, NAV_ITEM_TYPE_TITLE } from '@/constants/navigation.constant'

const clientNavigationConfig: NavigationTree[] = [
    {
        key: 'client',
        path: '/client/',
        title: 'Área do Cliente',
        translateKey: 'nav.client',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'client.profile',
                path: '/client/profile',
                title: 'Meu Perfil',
                translateKey: '',
                icon: 'uiDataDisplayAvatar',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default clientNavigationConfig;