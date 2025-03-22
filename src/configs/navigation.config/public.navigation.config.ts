import type { NavigationTree } from '@/@types/navigation'
import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from '@/constants/navigation.constant'

const publicNavigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'createContractor',
        path: '/create-contractor',
        title: 'Seja um Prestador',
        translateKey: 'nav.createContractor',
        icon: 'signUp',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'createContractor',
        path: '/create-contractor',
        title: 'O que é o Resolve?',
        translateKey: 'nav.createContractor',
        icon: 'ai',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'createContractor',
        path: '/create-contractor',
        title: 'Como o Resolve funciona?',
        translateKey: 'nav.createContractor',
        icon: 'feedback',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default publicNavigationConfig
