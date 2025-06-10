import { lazy } from 'react'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

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
    {
        key: 'contractor.subscription',
        path: '/contractor/subscription',
        component: lazy(() => import('@/views/contractor/Settings/components/SettingsBilling')),
        authority: [],
    }
]

export default contractorRoute
