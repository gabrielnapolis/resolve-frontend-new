
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormItem, Form } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import { toast } from '@/components/ui'
import { apiCreateClient } from '@/services/ClientService'

type ClientFormData = {
    fullname: string
    email: string
    password: string
    birthday: string
    cpf: string
}

const ClientCreate = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState<ClientFormData>({
        fullname: '',
        email: '',
        password: '',
        birthday: '',
        cpf: ''
    })

    const handleInputChange = (field: keyof ClientFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await apiCreateClient(formData)
            toast.push('Cliente criado com sucesso!')
            navigate('/adm/dashboard')
        } catch (error) {
            toast.push('Erro ao criar cliente')
        } finally {
            setIsLoading(false)
        }
    }

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '')
    }

    return (
        <Container>
            <AdaptiveCard>
                <div className="max-w-2xl mx-auto">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold">Criar Novo Cliente</h3>
                        <p className="text-gray-600 mt-1">Preencha os dados do cliente</p>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormItem label="Nome Completo" className="md:col-span-2">
                                <Input
                                    value={formData.fullname}
                                    onChange={(e) => handleInputChange('fullname', e.target.value)}
                                    placeholder="Nome completo do cliente"
                                    required
                                />
                            </FormItem>

                            <FormItem label="Email">
                                <Input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    placeholder="email@exemplo.com"
                                    required
                                />
                            </FormItem>

                            <FormItem label="CPF">
                                <Input
                                    value={formData.cpf}
                                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                                    placeholder="00000000000"
                                    maxLength={11}
                                    required
                                />
                            </FormItem>

                            <FormItem label="Data de Nascimento">
                                <Input
                                    value={formData.birthday}
                                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                                    placeholder="ddmmaaaa"
                                    maxLength={8}
                                    required
                                />
                            </FormItem>

                            <FormItem label="Senha">
                                <Input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    placeholder="Senha do cliente"
                                    required
                                />
                            </FormItem>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Button
                                type="button"
                                variant="default"
                                onClick={() => navigate('/adm/dashboard')}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                variant="solid"
                                loading={isLoading}
                                disabled={!isFormValid() || isLoading}
                            >
                                Criar Cliente
                            </Button>
                        </div>
                    </Form>
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default ClientCreate
