import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ContractorForm from '../ContractorForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { apiCreateContractor } from '@/services/ContractorService'
import type { ContractorFormSchema } from '../ContractorForm'

const ContractorEdit = () => {
    const navigate = useNavigate()

    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: ContractorFormSchema) => {
        setIsSubmiting(true)
        
        try {
            // Transform form data to match API format
            const apiData = {
                picture: values.picture || "",
                fullname: values.fullname,
                email: values.email,
                fone: values.fone?.replace(/[^\d]+/g, "") || "",
                birthday: values.birthday?.replace(/[^\d]+/g, "") || "",
                commercialName: null,
                description: values.description || "",
                password: values.password,
                state: values.state,
                cep: values.cep?.replace(/[^\d]+/g, "") || "",
                address: values.address,
                city: values.city,
                neighborhood: values.neighborhood,
                region: "",
                active: true,
                subscriberId: null,
                facebookId: null,
                specialities: values.specialities // Array of IDs
            }

            await apiCreateContractor(apiData)
            
            toast.push(
                <Notification type="success">Cadastro Realizado!</Notification>,
                { placement: 'top-center' },
            )
            
            navigate('/')
        } catch (error) {
            console.error('Erro ao cadastrar contractor:', error)
            toast.push(
                <Notification type="danger">Erro ao realizar cadastro!</Notification>,
                { placement: 'top-center' },
            )
        } finally {
            setIsSubmiting(false)
        }
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(true)
        toast.push(
            <Notification type="success">Cadastro Encerrado!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <ContractorForm
                defaultValues={{
                    fullname: "",
                    email: "",
                    emailConfirm: "",
                    cpf: "",
                    description: "",
                    fone: "",
                    password: "",
                    passwordConfirm: "",
                    specialities: [],
                    address: "",
                    cep: "",
                    state: "",
                    city: "",
                    neighborhood: "",
                    picture: "",
                }}
                onFormSubmit={handleFormSubmit}
            >
                <Container>
                    <div className="flex items-center justify-between px-8">
                        <span></span>
                        <div className="flex items-center">
                            <Button
                                className="ltr:mr-3 rtl:ml-3"
                                type="button"
                                customColorClass={() =>
                                    'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                }
                                icon={<TbTrash />}
                                onClick={handleDiscard}
                            >
                                Sair
                            </Button>
                            <Button
                                variant="solid"
                                type="submit"
                                loading={isSubmiting}
                            >
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                </Container>
            </ContractorForm>
            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="Cancelar cadastro?"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDiscard}
            >
                <p>
                    Tem certeza que deseja cancelar o cadastro? Você perderá todas
                    as informações não salvas.
                </p>
            </ConfirmDialog>
        </>
    )
}

export default ContractorEdit
