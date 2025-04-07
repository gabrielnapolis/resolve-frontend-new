import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardRoute: Routes = [
    {
        key: 'admin.dashboard',
        path: '/admin/dashboard',
        component: lazy(() => import('@/views/adm/Dashboard/Dashboard')),
        authority: [],
    },
    {
        key: 'admin.dashboard.contractors',
        path: '/admin/dashboard/contractors',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardContractor/DashboardContractor'
                ),
        ),
        authority: [],
    },
    {
        key: 'admin.dashboard.clients',
        path: '/admin/dashboard/clients',
        component: lazy(
            () =>
                import('@/views/adm/Dashboard/DasboardClient/DashboardClients'),
        ),
        authority: [],
    },
    {
        key: 'admin.dashboard.specialities',
        path: '/admin/dashboard/specialities',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardSpeciality/DashboardSpeciality'
                ),
        ),
        authority: [],
    },
    {
        key: 'admin.dashboard.payments',
        path: '/admin/dashboard/payments',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardPayments/DashboardPayments'
                ),
        ),
        authority: [],
    },
    {
        key: 'admin.dashboard.reports',
        path: '/admin/dashboard/reports',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardReports/DashboardReports'
                ),
        ),
        authority: [],
    },
    {
        key: 'admin.dashboard.marketing',
        path: '/admin/dashboard/marketing',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardMarketing/DashboardMarketing'
                ),
        ),
        authority: [],
    },
    {
        key: 'admin.dashboard.configuration',
        path: '/admin/dashboard/configuration',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardConfiguration/DashboardConfiguration'
                ),
        ),
        authority: [],
    },
]

export default dashboardRoute
