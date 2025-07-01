import { lazy } from 'react'
import { CONTRACTOR } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const contractorRoute: Routes = [
    {
        key: 'contractor.profile',
        path: 'contractor/profile',
        component: lazy(() => import('@/views/contractor/ContractorProfile')),
        authority: [CONTRACTOR],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'contractor.dashboard',
        path: '/contractor/dashboard',
        component: lazy(() => import('@/views/contractor/Settings')),
        authority: [CONTRACTOR],
    },
    {
        key: 'contractor.subscription',
        path: '/contractor/subscription',
        component: lazy(
            () =>
                import(
                    '@/views/contractor/Settings/components/SettingsBilling'
                ),
        ),
        authority: [CONTRACTOR],
    },
]

export default contractorRoute
