import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'
import { ex } from '@fullcalendar/core/internal-common'

const contractorRoute: Routes = [
    {
        key: 'contractor.profile',
        path: 'contractor/profile',
        component: lazy(() => import('@/views/contractor/ContractorProfile')),
        authority: [ADMIN, USER],
        meta: {
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