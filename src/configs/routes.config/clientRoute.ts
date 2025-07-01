import { lazy } from 'react'
import type { Routes } from '@/@types/routes'
import { CLIENT } from '@/constants/roles.constant'

const clientRoute: Routes = [
    {
        key: 'clientProfile',
        path: '/client/profile',
        component: lazy(() => import('@/views/contractor/ContractorProfile')),
        authority: [CLIENT],
    },
    {
        key: 'clientDetail',
        path: '/client/detail/:id',
        component: lazy(() => import('@/views/client/ClientDetail')),
        authority: [CLIENT],
    },
]

export default clientRoute