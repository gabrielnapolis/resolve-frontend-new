import Container from '@/components/shared/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Avatar } from '@/components/ui'
import { HiOutlineUser } from 'react-icons/hi'

const BodySection = () => {
    const cardFooter = (
        <div className="flex">
            <Button size="sm" className="mr-2">
                Pintura
            </Button>
            <Button size="sm">Marcenaria</Button>
        </div>
    )

    return (
        <div className="my-12">
            <Container>
                <div className="mx-auto">
                    <div>
                        <Card
                            header={{
                                content: 'João Pintor',
                                bordered: false,
                            }}
                            footer={{
                                content: cardFooter,
                                bordered: false,
                            }}
                        >
                            <div className="flex items-center">
                                <Avatar
                                    size={60}
                                    className="mr-4"
                                    icon={<HiOutlineUser />}
                                />
                                <div className="flex-row">
                                    <p>Telefone: 62991395688</p>
                                    <p>joaopintura@gmail.com</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BodySection
