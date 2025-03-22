import useSWR from 'swr'
import { getSpecialitys } from '@/services/SpecialityService'
import SpecialityTable from './SpecialityTable'
import SpecialityForm from './SpecialityForm'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'

const fetchSpecialitys = async () => {
    try {
        return await getSpecialitys()
    } catch (error) {
        console.error('Error fetching specialities:', error)
        return []
    }
}

const DashboardSpeciality = () => {
    const { data = [] } = useSWR('specialitys', fetchSpecialitys)
    return (
        <Container>
            <AdaptiveCard>
                <div className="flex flex-col gap-4">
                    <div className="gap-4 flex flex-col flex-auto">
                        <SpecialityForm />
                    </div>

                    <div className="mt-8">
                        <SpecialityTable className="mt-4" data={data} />
                    </div>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default DashboardSpeciality
