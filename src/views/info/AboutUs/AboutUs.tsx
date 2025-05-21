
import { Card } from '@/components/ui'

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Card className="mb-8">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6">Sobre o Projeto</h1>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Conectamos profissionais qualificados a oportunidades de trabalho, 
                                facilitando o processo de contratação e prestação de serviços 
                                de forma segura e eficiente.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Para Clientes</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Encontre profissionais qualificados, compare perfis e 
                                        contrate com segurança.
                                    </p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Para Profissionais</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Cadastre seu perfil, destaque suas habilidades e 
                                        encontre novas oportunidades.
                                    </p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">Garantias</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Oferecemos um ambiente seguro com avaliações, 
                                        verificações e suporte dedicado.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Nossos Diferenciais</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                <li>Profissionais verificados e qualificados</li>
                                <li>Sistema de avaliação transparente</li>
                                <li>Suporte personalizado</li>
                                <li>Pagamentos seguros</li>
                                <li>Interface intuitiva e moderna</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AboutUs
