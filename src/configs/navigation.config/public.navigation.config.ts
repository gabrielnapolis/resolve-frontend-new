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
        key: 'create.contractor',
        path: '/create-contractor',
        title: 'Seja um Prestador',
        translateKey: 'nav.createContractor',
        icon: 'signUp',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'create.contractor.plans',
        path: '/create-contractor/plans',
        title: 'Planos de Assinatura',
        translateKey: 'nav.createContractor',
        icon: 'dashboardProject',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'info.works',
        path: '/como-funciona',
        title: 'Como o Resolve funciona?',
        translateKey: '',
        icon: 'feedback',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'help',
        path: '/ajuda',
        title: 'Ajuda',
        translateKey: 'nav.help',
        icon: 'helpCenter',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'info.aboutUs',
        path: '/sobre-nos',
        title: 'Sobre nós',
        translateKey: 'nav.help',
        icon: 'utilsDoc',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default publicNavigationConfig
