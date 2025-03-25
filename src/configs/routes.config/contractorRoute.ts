import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'
import { ex } from '@fullcalendar/core/internal-common'

const contractorRoute: Routes = [
    {
        key: 'contractor.settings',
        path: 'contractor/settings',
        component: lazy(() => import('@/views/contractor/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: {
                title: 'Settings',
            },
            pageContainerType: 'contained',
        },
    },
    {
        key: 'contractor.dashboard',
        path: '/contractor/dashboard',
        component: lazy(() => import('@/views/contractor/Settings')),
        authority: [],
    },
]

export default contractorRoute