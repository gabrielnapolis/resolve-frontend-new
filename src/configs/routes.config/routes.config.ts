import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import { ADMIN, USER } from '@/constants/roles.constant'
import dashboardRoute from './dashboardRoute'
import infoRoute from './infoRoute'
import contractorRoute from './contractorRoute'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
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
    ...infoRoute,
    ...contractorRoute,
    ...dashboardRoute,
]
