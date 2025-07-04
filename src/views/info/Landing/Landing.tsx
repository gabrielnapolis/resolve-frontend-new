
import React from 'react'
import { Button } from '@/components/ui'
import { HiArrowRight, HiCheckCircle, HiPlay, HiDownload } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()

    const services = [
        {
            title: 'Pedreiro',
            description: 'Construção e reformas em geral',
            image: '/img/others/wapp.png'
        },
        {
            title: 'Marceneiro',
            description: 'Móveis sob medida e carpintaria',
            image: '/img/others/wapp.png'
        },
        {
            title: 'Pintor',
            description: 'Pintura residencial e comercial',
            image: '/img/others/wapp.png'
        },
        {
            title: 'Eletricista',
            description: 'Instalações e manutenções elétricas',
            image: '/img/others/wapp.png'
        }
    ]

    const testimonials = [
        {
            text: "O profissional foi muito competente e pontual. Realizou o serviço com qualidade e preço justo. Recomendo!",
            service: "Serviço de Pedreiro",
            client: "Maria Silva",
            location: "Contratou um Pedreiro em São Paulo, SP"
        },
        {
            text: "Excelente trabalho! O marceneiro entregou exatamente o que foi solicitado, no prazo combinado.",
            service: "Serviço de Marceneiro",
            client: "João Santos",
            location: "Contratou um Marceneiro em Rio de Janeiro, RJ"
        },
        {
            text: "Profissional muito educado e cuidadoso. O resultado ficou perfeito e dentro do orçamento.",
            service: "Serviço de Pintor",
            client: "Ana Costa",
            location: "Contratou um Pintor em Belo Horizonte, MG"
        }
    ]

    const features = [
        {
            icon: '📝',
            title: 'Faça o seu pedido',

            description: 'Descreva o serviço que precisa. É rápido e gratuito!'
        },
        {
            icon: '👥',
            title: 'Receba propostas',
            description: 'Profissionais qualificados entram em contato com você!'

        },
        {
            icon: '👍',
            title: 'Escolha o melhor',
            description: 'Compare propostas e escolha o profissional ideal!'

        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            Encontre os melhores prestadores de serviços
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Conectamos você com profissionais qualificados para pedreiros, marceneiros, 
                            carpinteiros, pintores e muito mais. Busque de forma simples e clara, 
                            de acordo com sua necessidade e localização.

                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button 
                                size="lg" 
                                variant="solid"
                                className="bg-white text-blue-600 hover:bg-gray-50"
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
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Principais serviços disponíveis
                        </h2>
                        <p className="text-gray-600">
                            Os serviços mais solicitados em nossa plataforma

                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-2xl font-bold">
                                            {service.title.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                                    <Button 
                                        size="sm" 
                                        variant="plain"
                                        className="text-blue-600 hover:text-blue-700"
                                        onClick={() => navigate('/search')}
                                    >
                                        Encontrar Prestador

                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Como funciona o Resolve?
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

            {/* App Download Section */}
            <section className="py-16 bg-blue-600">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between max-w-6xl mx-auto">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Baixe nosso aplicativo
                            </h2>
                            <p className="text-blue-100 mb-6">
                                Tenha acesso à nossa plataforma onde estiver. Baixe agora e encontre os melhores profissionais!
                            </p>
                            <div className="flex gap-4">
                                <Button 
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                    icon={<HiDownload />}
                                >
                                    Google Play
                                </Button>
                                <Button 
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                    icon={<HiDownload />}
                                >
                                    App Store
                                </Button>
                            </div>
                        </div>
                        <div className="hidden lg:block flex-1">
                            <div className="flex justify-center">
                                <div className="w-64 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-12">
                                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <div className="text-sm font-semibold mb-4">Encontrar Profissionais</div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {['Pedreiro', 'Pintor', 'Eletricista', 'Marceneiro', 'Encanador', 'Jardineiro'].map((prof, idx) => (
                                                    <div key={idx} className="bg-blue-100 p-2 rounded text-xs">

                                                        {prof}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            O que nossos clientes dizem
                        </h2>
                        <p className="text-gray-600">
                            Depoimentos de quem já utilizou nossa plataforma
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <div className="text-blue-500 text-4xl mb-4">"</div>
                                <p className="text-gray-700 mb-4 italic">
                                    {testimonial.text}
                                </p>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-blue-600 mb-1">
                                        {testimonial.service}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>{testimonial.client}</strong> - {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-16 bg-blue-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Pronto para encontrar o profissional ideal?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Milhares de profissionais qualificados estão prontos para atender você
                    </p>
                    <Button 
                        size="lg" 
                        className="bg-white text-blue-600 hover:bg-gray-100"

                        onClick={() => navigate('/search')}
                        icon={<HiArrowRight />}
                    >
                        Começar Agora
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Landing
