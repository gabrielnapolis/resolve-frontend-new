import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const dashboardsNavigationConfig: NavigationTree[] = [
    {
        key: 'admin',
        path: '/admin/dashboard',
        title: 'Dashboard Adm',
        translateKey: 'nav.createContractor',
        icon: 'dashboardProject',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/contractors',
                title: 'Listagem de Prestadores',
                translateKey: 'nav.DashboardContractors',
                icon: 'dashboardEcommerce',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/contractors',
                title: 'Listagem de Clientes',
                translateKey: 'nav.DashboardContractors',
                icon: 'customers',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Cadastro de Especialidades',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'projects',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Gerenciador de Pagamentos',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'graph',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Relatórios',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'dashboardAnalytic',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Marketing',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'dashboardMarketing',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'dashboard.ecommerce',
                path: '/admin/dashboard/specialities',
                title: 'Configurações',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'accountSettings',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default dashboardsNavigationConfig
