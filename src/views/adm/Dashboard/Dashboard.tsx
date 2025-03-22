import { lazy, Suspense } from 'react'
import useResponsive from '@/utils/hooks/useResponsive'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import TabMenu from './components/TabMenu'
import MobileMenu from './components/MobileMenu'

import { useDashboardStore } from './components/store/dashboardStore'

const Panel = lazy(() =>import('@/views/dashboards/EcommerceDashboard'))
const Clients = lazy(() => import('./DasboardClient/DashboardClients'))
const Contractor = lazy(() => import('./DashboardContractor/DashboardContractor'))
const Speciality = lazy(() => import('./DashboardSpeciality/DashboardSpeciality'))
const Payments = lazy(() => import('./DashboardPayment/DashboardPayments'))

const Dashboard = () => {
    const { currentView } = useDashboardStore()

    const { smaller, larger } = useResponsive()

    return (
        <AdaptiveCard className="h-full">
            <div className="flex flex-auto h-full">
                {larger.lg && (
                    <div className="'w-[200px] xl:w-[280px]">
                        <TabMenu />
                    </div>
                )}
                <div className="ltr:xl:pl-6 rtl:xl:pr-6 flex-1 py-2">
                    {smaller.lg && (
                        <div className="mb-6">
                            <MobileMenu />
                        </div>
                    )}
                    <Suspense fallback={<></>}>
                        {currentView === 'clients' && <Clients />}
                        {currentView === 'contractor' && <Contractor />}
                        {currentView === 'speciality' && <Speciality />}
                        {currentView === 'payments' && <Payments />}
                    </Suspense>
                </div>
            </div>
        </AdaptiveCard>
    )
}

export default Dashboard
