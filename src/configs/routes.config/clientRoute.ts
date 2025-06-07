import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const clientRoute: Routes = [
    {
        key: 'clientProfile',
        path: '/client/profile',
        component: lazy(() => import('@/views/contractor/ContractorProfile')),
        authority: [],
    },
    {
        key: 'create.client',
        path: '/create-client',
        component: lazy(() => import('@/views/client/ClientCreate')),
        authority: [],
    },
    {
        key: 'clientDetail',
        path: '/client/detail/:id',
        component: lazy(() => import('@/views/client/ClientDetail')),
        authority: [],
    },
]

export default clientRoute