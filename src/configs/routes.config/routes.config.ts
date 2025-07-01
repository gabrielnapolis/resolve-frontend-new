import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import dashboardRoute from './dashboardRoute'
import infoRoute from './infoRoute'
import contractorRoute from './contractorRoute'
import clientRoute from './clientRoute'

export const publicRoutes: Routes = [
    ...authRoute,
    ...infoRoute,
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/search/index')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'create.contractor',
        path: '/create-contractor',
        component: lazy(() => import('@/views/contractor/ContractorCreate')),
        authority: [],
    },
    {
        key: 'create.contractor.plans',
        path: '/create-contractor/plans',
        component: lazy(() => import('@/views/contractor/ContractorPlans')),
        authority: [],
    },
    {
        key: 'dashboard.contractor.details',
        path: '/adm/dashboard/contractor/details/:id',
        component: lazy(
            () =>
                import(
                    '@/views/adm/Dashboard/DashboardContractor/components/ContractorDetails'
                ),
        ),
        authority: [],
    },
    {
        key: 'create.client',
        path: '/create-client',
        component: lazy(() => import('@/views/client/ClientCreate')),
        authority: [],
    },
]

export const protectedRoutes: Routes = [
    ...contractorRoute,
    ...dashboardRoute,
    ...clientRoute,
]
