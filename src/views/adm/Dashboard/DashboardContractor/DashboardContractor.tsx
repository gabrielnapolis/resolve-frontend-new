import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ContractorListTableListTable from './components/ContractorListTableListTable'
import ContractorListActionTools from './components/ContractorListActionTools'
import ContractorListTableTools from './components/ContractorListTableTools'
import ContractorListSelected from './components/ContractorListSelected'
import useSWR from 'swr'


const DashboardContractor = () => {

    return (
        <>
          <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Prestadores</h3>
                            <ContractorListActionTools />
                        </div>
                        <ContractorListTableTools />
                        {/* <ContractorListTableListTable className="mt-4" data={data}/> */}
                    </div>
                </AdaptiveCard>
            </Container>
            <ContractorListSelected />
        </>
    )
}

export default DashboardContractor
