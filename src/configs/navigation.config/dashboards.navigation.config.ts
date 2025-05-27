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
        title: 'Dashboard Administrador',
        translateKey: 'nav.createContractor',
        icon: 'dashboardProject',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'admin.dashboard.contractors',
                path: '/admin/dashboard/contractors',
                title: 'Listagem de Prestadores',
                translateKey: 'nav.DashboardContractors',
                icon: 'dashboardEcommerce',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'admin.dashboard.clients',
                path: '/admin/dashboard/clients',
                title: 'Listagem de Clientes',
                translateKey: 'nav.DashboardContractors',
                icon: 'customers',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'admin.dashboard.specialities',
                path: '/admin/dashboard/specialities',
                title: 'Cadastro de Especialidades',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'projects',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'admin.dashboard.payments',
                path: '/admin/dashboard/payments',
                title: 'Gerenciador de Pagamentos',
                translateKey: 'nav.DashboardSpeciality',
                icon: 'graph',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            // {
            //     key: 'admin.dashboard.reports',
            //     path: '/admin/dashboard/reports',
            //     title: 'Relatórios',
            //     translateKey: '',
            //     icon: 'dashboardAnalytic',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [],
            //     subMenu: [],
            // },
            // {
            //     key: 'admin.dashboard.marketing',
            //     path: '/admin/dashboard/marketing',
            //     title: 'Marketing',
            //     translateKey: '',
            //     icon: 'dashboardMarketing',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [],
            //     subMenu: [],
            // },
            // {
            //     key: 'admin.dashboard.configuration',
            //     path: '/admin/dashboard/configuration',
            //     title: 'Configurações',
            //     translateKey: '',
            //     icon: 'accountSettings',
            //     type: NAV_ITEM_TYPE_ITEM,
            //     authority: [],
            //     subMenu: [],
            // },
        ],
    },
]

export default dashboardsNavigationConfig
