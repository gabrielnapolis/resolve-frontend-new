import { lazy } from 'react'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const clientRoute: Routes = [
    {
        key: 'client.profile',
        path: 'client/profile',
        component: lazy(() => import('@/views/contractor/ContractorProfile')),
        authority: [],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'client.create',
        path: 'client/create',
        component: lazy(() => import('@/views/client/ClientCreate')),
        authority: [ADMIN],
        meta: {
            pageContainerType: 'contained',
        },
    },
]

export default clientRoute