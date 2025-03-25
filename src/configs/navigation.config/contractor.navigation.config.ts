import type { NavigationTree } from '@/@types/navigation'
import { NAV_ITEM_TYPE_ITEM, NAV_ITEM_TYPE_TITLE } from '@/constants/navigation.constant'

const contractorNavigationConfig: NavigationTree[] = [
    {
        key: 'dashboardContractor',
        path: '/contractor/dashboard',
        title: 'Dashboard Prestador',
        translateKey: 'nav.createContractor',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'contractor.settings',
                path: '/contractor/settings',
                title: 'Perfil',
                translateKey: '',
                icon: 'uiDataDisplayAvatar',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'contractor.specialities',
                path: '/contractor/specialities',
                title: 'Especialidades',
                translateKey: '',
                icon: 'common',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'contractor.review',
                path: '/contractor/review',
                title: 'Avaliações',
                translateKey: '',
                icon: 'feedback',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'contractor.signature',
                path: '/contractor/signature',
                title: 'Assinatura',
                translateKey: '',
                icon: 'dashboardProject',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'contractor.password',
                path: '/contractor/password',
                title: 'Atualizar Senha',
                translateKey: '',
                icon: 'forgotPassword',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'contractor.help',
                path: '/contractor/help',
                title: 'Ajuda',
                translateKey: '',
                icon: 'helpCenter',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default contractorNavigationConfig;