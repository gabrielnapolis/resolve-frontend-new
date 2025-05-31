
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { Avatar } from '@/components/ui'
import { HiOutlineUser, HiOutlineStar } from 'react-icons/hi'
import { HiStar } from 'react-icons/hi2'
import type { ContractorOverview } from '../types'

interface CardContractorProps {
    contractor: ContractorOverview
}

const CardContractor = ({ contractor }: CardContractorProps) => {
    // Mock rating - futuramente será implementado
    const rating = Math.floor(Math.random() * 5) + 1

    const renderStars = (rating: number) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className="text-yellow-400">
                    {i <= rating ? <HiStar className="w-4 h-4" /> : <HiOutlineStar className="w-4 h-4" />}
                </span>
            )
        }
        return stars
    }

    const cardHeader = (
        <div className="flex justify-between items-start">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                {contractor.fullname}
            </h4>
            <div className="flex items-center gap-1">
                {renderStars(rating)}
                <span className="text-sm text-gray-500 ml-1">({rating}/5)</span>
            </div>
        </div>
    )

    const cardFooter = (
        <div className="flex flex-wrap gap-2">
            {contractor.specialities.map((spec, index) => (
                <Tag key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {spec.speciality.fullname}
                </Tag>
            ))}
        </div>
    )

    return (
        <Card
            className="h-full hover:shadow-lg transition-shadow duration-300"
            header={{
                content: cardHeader,
                bordered: false,
            }}
            footer={{
                content: cardFooter,
                bordered: false,
            }}
        >
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <Avatar
                        size={60}
                        src={contractor.picture}
                        icon={<HiOutlineUser />}
                        className="flex-shrink-0"
                    />
                    <div className="flex-1 space-y-2">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <span className="font-medium">Telefone:</span> {contractor.fone}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <span className="font-medium">Email:</span> {contractor.email}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <span className="font-medium">Localização:</span> {contractor.city}, {contractor.state}
                            </p>
                        </div>
                    </div>
                </div>
                
                {contractor.description && (
                    <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                            {contractor.description}
                        </p>
                    </div>
                )}
                
                <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="solid" className="flex-1">
                        Ver Perfil
                    </Button>
                    <Button size="sm" className="flex-1">
                        Contatar
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default CardContractor
