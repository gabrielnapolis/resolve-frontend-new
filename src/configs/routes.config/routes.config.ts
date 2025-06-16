import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

import authRoute from './authRoute'
import dashboardRoute from './dashboardRoute'
import clientRoute from './clientRoute'
import contractorRoute from './contractorRoute'
import infoRoute from './infoRoute'

// Help Center Routes
const helpCenterRoutes: Routes = [
    {
        key: 'helpCenter.supportHub',
        path: '/concepts/help-center/support-hub',
        component: lazy(() => import('@/views/help-center/SupportHub')),
        authority: [],
    },
    {
        key: 'helpCenter.article',
        path: '/concepts/help-center/article/:id',
        component: lazy(() => import('@/views/help-center/Article')),
        authority: [],
    },
    {
        key: 'helpCenter.editArticle',
        path: '/concepts/help-center/edit-article/:id',
        component: lazy(() => import('@/views/help-center/EditArticle')),
        authority: [],
    },
    {
        key: 'helpCenter.manageArticle',
        path: '/concepts/help-center/manage-article',
        component: lazy(() => import('@/views/help-center/ManageArticle')),
        authority: [],
    },
]

export const publicRoutes: Routes = [
    ...authRoute,
    ...infoRoute,
]

export const protectedRoutes: Routes = [
    ...dashboardRoute,
    ...clientRoute,
    ...contractorRoute,
    ...helpCenterRoutes,
]