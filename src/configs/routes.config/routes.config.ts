import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'
import dashboardsRoute from './dashboardsRoute'
import { ADMIN, USER } from '@/constants/roles.constant'
import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(
            () => import('@/views/concepts/help-center/SupportHub')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'createContractor',
        path: '/create-contractor',
        component: lazy(
            () => import('@/views/contractor/ContractorCreate'),
        ),
        authority: [],
    },
    {
        key: 'admin',
        path: '/admin/dashboard',
        component: lazy(() => import('@/views/adm/Dashboard/Dashboard')),
        authority: [],
    },
    {
        key: 'admin',
        path: '/admin/dashboard/contractors',
        component: lazy(() => import('@/views/adm/Dashboard/DashboardContractor/DashboardContractor')),
        authority: [],
    },
    {
        key: 'admin',
        path: '/admin/dashboard/specialities',
        component: lazy(() => import('@/views/adm/Dashboard/DashboardSpeciality/DashboardSpeciality')),
        authority: [],
    },
    
    {
        key: 'dashboardContractor',
        path: '/contractor/dashboard',
        component: lazy(() => import('@/views/concepts/accounts/Settings')),
        authority: [],
    },

    ...dashboardsRoute,
    ...othersRoute,
]
