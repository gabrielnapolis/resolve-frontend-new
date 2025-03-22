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
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Perfil',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'projects',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Especialidades',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'common',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Avaliações',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'feedback',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Assinatura',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'dashboardProject',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Atualizar Senha',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'forgotPassword',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Ajuda',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'helpCenter',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default contractorNavigationConfig;