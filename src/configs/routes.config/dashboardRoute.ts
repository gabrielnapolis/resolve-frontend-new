import { lazy } from 'react'
import { ADMIN } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardRoute: Routes = [
    {
        key: 'admin.dashboard',
        path: '/admin/dashboard',
        component: lazy(() => import('@/views/adm/Dashboard/Dashboard')),
        authority: [ADMIN],
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
        authority: [ADMIN],
    },
    {
        key: 'admin.dashboard.clients',
        path: '/admin/dashboard/clients',
        component: lazy(
            () =>
                import('@/views/adm/Dashboard/DashboardClient/DashboardClient'),
        ),
        authority: [ADMIN],
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
        authority: [ADMIN],
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
        authority: [ADMIN],
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
        authority: [ADMIN],
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
        authority: [ADMIN],
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
        authority: [ADMIN],
    },
    {
        key: 'dashboard.contractor',
        path: '/adm/dashboard/contractor',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardContractor/DashboardContractor'
                ),
        ),
        authority: [ADMIN],
    }
]

export default dashboardRoute
