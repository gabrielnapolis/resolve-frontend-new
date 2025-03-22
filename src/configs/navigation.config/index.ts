import type { NavigationTree } from '@/@types/navigation'
import dashboardsNavigationConfig from './dashboards.navigation.config'
import { ADMIN, USER } from '@/constants/roles.constant'
import contractorNavigationConfig from './contractor.navigation.config'
import publicNavigationConfig from './public.navigation.config'

const navigationConfig: NavigationTree[] = [
    ...publicNavigationConfig,
    ...dashboardsNavigationConfig,
    ...contractorNavigationConfig,
]

export default navigationConfig
