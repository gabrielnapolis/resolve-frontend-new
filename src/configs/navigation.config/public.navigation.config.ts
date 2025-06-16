import type { NavigationTree } from '@/@types/navigation'

const publicNavigationConfig: NavigationTree[] = [
    {
        key: 'helpCenter',
        path: '',
        title: 'Central de Ajuda',
        translateKey: 'nav.helpCenter',
        icon: 'helpCircle',
        type: 'collapse',
        authority: [],
        subMenu: [
            {
                key: 'helpCenter.supportHub',
                path: '/concepts/help-center/support-hub',
                title: 'Central de Suporte',
                translateKey: 'nav.helpCenter.supportHub',
                icon: '',
                type: 'item',
                authority: [],
                subMenu: [],
            },
            {
                key: 'helpCenter.manageArticle',
                path: '/concepts/help-center/manage-article',
                title: 'Gerenciar Artigos',
                translateKey: 'nav.helpCenter.manageArticle',
                icon: '',
                type: 'item',
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default publicNavigationConfig