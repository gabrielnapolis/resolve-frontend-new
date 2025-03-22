import { SpecialityFields } from "@/views/adm/Dashboard/DashboardSpeciality/types"


export async function getSpecialitys(): Promise<SpecialityFields[]> {
    const res = await fetch('http://localhost:3001/speciality')
    const data: SpecialityFields[] = await res.json()

    return data
}
