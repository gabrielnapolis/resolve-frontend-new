import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ClientListActionTools from './components/ClientListActionTools'
import ClientListTableTools from './components/ClientListTableTools'
import ClientListSelected from './components/ClientListSelected'
import useSWR from 'swr'
import ClientListTable from './components/ClientListTable'

const DashboardClient = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Clientes</h3>
                            <ClientListActionTools />
                        </div>
                        <ClientListTableTools />
                        <ClientListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            {/* <ClientListSelected /> */}
        </>
    )
}

export default DashboardClient