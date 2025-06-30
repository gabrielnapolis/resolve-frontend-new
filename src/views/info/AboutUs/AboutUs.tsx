
import React from 'react'
import { Card, Button } from '@/components/ui'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
    const navigate = useNavigate()

    const features = [
        {
            icon: '🎯',
            title: 'Nossa Missão',
            description: 'Conectamos profissionais qualificados a oportunidades de trabalho, facilitando o processo de contratação e prestação de serviços de forma segura e eficiente.'
        },
        {
            icon: '👥',
            title: 'Para Clientes',
            description: 'Encontre profissionais qualificados, compare perfis e contrate com segurança.'
        },
        {
            icon: '🔧',
            title: 'Para Profissionais',
            description: 'Cadastre seu perfil, destaque suas habilidades e encontre novas oportunidades.'
        }
    ]

    const differentials = [
        'Profissionais verificados e qualificados',
        'Sistema de avaliação transparente',
        'Suporte personalizado',
        'Pagamentos seguros',
        'Interface intuitiva e moderna'
    ]

    const stats = [
        { number: '5.000+', label: 'Profissionais Cadastrados' },
        { number: '15.000+', label: 'Serviços Realizados' },
        { number: '98%', label: 'Satisfação dos Clientes' },
        { number: '24h', label: 'Suporte Disponível' }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            Sobre o Resolve
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Conectamos profissionais qualificados a oportunidades de trabalho, 
                            facilitando o processo de contratação e prestação de serviços 
                            de forma segura e eficiente.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button 
                                size="lg" 
                                variant="solid"
                                className="bg-white text-blue-600 hover:bg-gray-50"
                                onClick={() => navigate('/search')}
                                icon={<HiArrowRight />}
                            >
                                Encontrar Profissionais
                            </Button>
                            <Button 
                                size="lg" 
                                variant="plain"
                                className="text-white border-white hover:bg-white/10"
                                onClick={() => navigate('/auth/sign-up')}
                            >
                                Cadastrar como Prestador
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-gray-600">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Como Funciona
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            O Resolve é uma plataforma que conecta você aos melhores prestadores de serviços 
                            da sua região. Encontre profissionais qualificados de forma rápida e segura.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentials Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Nossos Diferenciais
                            </h2>
                            <p className="text-gray-600">
                                O que nos torna únicos no mercado de serviços
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {differentials.map((differential, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                                    <HiCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
                                    <span className="text-gray-700">{differential}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantees Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Para Clientes</h3>
                            <p className="text-gray-600">
                                Encontre profissionais qualificados, compare perfis e 
                                contrate com segurança.
                            </p>
                        </Card>
                        
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔧</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Para Profissionais</h3>
                            <p className="text-gray-600">
                                Cadastre seu perfil, destaque suas habilidades e 
                                encontre novas oportunidades.
                            </p>
                        </Card>
                        
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Garantias</h3>
                            <p className="text-gray-600">
                                Oferecemos um ambiente seguro com avaliações, 
                                verificações e suporte dedicado.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Pronto para começar?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Junte-se a milhares de profissionais e clientes que já confiam no Resolve
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button 
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-gray-100"
                            onClick={() => navigate('/search')}
                            icon={<HiArrowRight />}
                        >
                            Buscar Profissionais
                        </Button>
                        <Button 
                            size="lg" 
                            variant="plain"
                            className="text-white border-white hover:bg-white/10"
                            onClick={() => navigate('/auth/sign-up')}
                        >
                            Cadastrar como Prestador
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
