import type { NavigationTree } from '@/@types/navigation'
import dashboardsNavigationConfig from './dashboards.navigation.config'
import contractorNavigationConfig from './contractor.navigation.config'
import publicNavigationConfig from './public.navigation.config'
import clientNavigationConfig from './client.navigation.config'

const navigationConfig: NavigationTree[] = [
    ...publicNavigationConfig,
    ...dashboardsNavigationConfig,
    ...contractorNavigationConfig,
    ...clientNavigationConfig,
]

export default navigationConfig
