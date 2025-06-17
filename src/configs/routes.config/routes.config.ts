import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import { ADMIN, USER } from '@/constants/roles.constant'
import dashboardRoute from './dashboardRoute'
import infoRoute from './infoRoute'
import contractorRoute from './contractorRoute'
import clientRoute from './clientRoute'

export const publicRoutes: Routes = [
    ...authRoute,
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
        key: 'create.client',
        path: '/create-client',
        component: lazy(() => import('@/views/client/ClientCreate')),
        authority: [],
    },
    {
        key: 'help.article',
        path: '/ajuda/artigo/:id',
        component: lazy(() => import('@/views/help-center/Article')),
        authority: [],
    },
    ...infoRoute,
]

export const protectedRoutes: Routes = [
    ...contractorRoute,
    ...dashboardRoute,
    ...clientRoute
]
