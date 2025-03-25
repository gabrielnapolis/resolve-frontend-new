import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const infoRoute: Routes = [
    {
        key: 'helpCenter.supportHub',
        path: '/ajuda',
        component: lazy(() => import('@/views/help-center/SupportHub')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'info.works',
        path: '/como-funciona',
        component: lazy(() => import('@/views/info/Works')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'info.aboutUs',
        path: '/sobre-nos',
        component: lazy(() => import('@/views/info/AboutUs')),
        authority: [],
        meta: {
            pageContainerType: 'gutterless',
            pageBackgroundType: 'plain',
        },
    },
]

export default infoRoute