export const featuresList: {
    id: string
    description: Record<string, string>
}[] = [
    {
        id: 'visibilidade',
        description: {
            basic: 'Visibilidade do perfil em toda Goiânia e região (todo estado de Goiás)',
            standard: 'Visibilidade do perfil em toda Goiânia e região (todo estado de Goiás)',
            pro: 'Visibilidade do perfil em toda Goiânia e região (todo estado de Goiás)',
        },
    },
    {
        id: 'marketing',
        description: {
            basic: 'Marketing completo do perfil dentro da plataforma',
            standard: 'Marketing completo do perfil dentro da plataforma',
            pro: 'Marketing completo do perfil dentro da plataforma',
        },
    },
    {
        id: 'maiorVisibilidade',
        description: {
            basic: 'Maior visibilidade do telefone adicionado ao perfil',
            standard: 'Maior visibilidade do telefone adicionado ao perfil',
            pro: 'Maior visibilidade do telefone adicionado ao perfil',
        },
    },
    {
        id: 'clientes',
        description: {
            basic: 'Clientes em regiões mais próximas para facilitar o atendimento',
            standard: 'Clientes em regiões mais próximas para facilitar o atendimento',
            pro: 'Clientes em regiões mais próximas para facilitar o atendimento',
        },
    },
]

export const questionList: Record<
    string,
    {
        title: string
        content: string
        defaultExpand: boolean
    }[]
> = {
    subscription: [
        {
            title: 'Como faço para assinar um plano?',
            content:
                'Selecione o plano acima com sua assinatura preferida e siga as instruções na tela para criar uma conta e inserir seus dados de pagamento.',
            defaultExpand: true,
        },
        {
            title: 'Posso cancelar minha assinatura?',
            content:
                'Sim, você tem flexibilidade para cancelar sua assinatura a qualquer momento. Para cancelar, basta fazer login em sua conta, navegar até a seção "Assinatura" e seguir as instruções para cancelar seu plano. O cancelamento terá efeito no final do seu ciclo de faturamento atual.',
            defaultExpand: false,
        },
        {
            title: 'Posso mudar meu plano de assinatura?',
            content:
                'Com certeza, você pode alternar entre os planos mensais e anuais quando quiser. Para alterar seu plano, faça login em sua conta, vá até a seção "Assinatura", selecione o plano desejado e siga as instruções. Seu novo plano entrará em vigor imediatamente.',
            defaultExpand: false,
        },
        {
            title: 'Vocês oferecem um período de teste gratuito?',
            content:
                'Sim, oferecemos um teste gratuito de 14 dias para novos usuários. Durante esse período, você pode acessar todos os recursos do nosso plano de assinatura. Se você continuar após o teste, será cobrado de acordo com o plano selecionado.',
            defaultExpand: false,
        },
        {
            title: 'Como sei quando minha assinatura está prestes a ser renovada?',
            content:
                'Você receberá um e-mail de notificação alguns dias antes da renovação da sua assinatura, lembrando-o sobre a cobrança futura e oferecendo a opção de fazer alterações, se necessário.',
            defaultExpand: false,
        }
    ],
    billing: [
        {
            title: 'Quais métodos de pagamento são aceitos?',
            content:
                'Buscamos tornar o processo de pagamento o mais conveniente possível, aceitando diversos métodos. Isso inclui cartões de crédito e débito das bandeiras Visa, MasterCard e American Express, além do PayPal. Dependendo da sua região, outros métodos de pagamento locais também podem estar disponíveis.',
            defaultExpand: true,
        },
        {
            title: 'O que acontece se meu pagamento falhar?',
            content:
                'Se o pagamento falhar, enviaremos uma notificação por e-mail. Você terá um período de carência de 7 dias para atualizar suas informações de pagamento. Se o problema não for resolvido nesse prazo, sua assinatura será suspensa temporariamente até que o pagamento seja processado com sucesso.',
            defaultExpand: false,
        },
        {
            title: 'Como atualizo minhas informações de pagamento?',
            content:
                'Para atualizar suas informações de pagamento, faça login em sua conta, vá até a seção "Cobrança" e insira os novos dados. Certifique-se de salvar as alterações para garantir a continuidade do serviço.',
            defaultExpand: false,
        },
        {
            title: 'Receberei um reembolso se cancelar minha assinatura?',
            content:
                'Nossa política de reembolso varia conforme o tipo de assinatura. Para o Plano Mensal, não oferecemos reembolsos. Já para o Plano Anual, você pode ter direito a um reembolso proporcional se cancelar nos primeiros 30 dias da assinatura. Entre em contato com nosso suporte para auxílio nesse processo.',
            defaultExpand: false,
        },
    ],
    others: [
        {
            title: 'Como entro em contato com o suporte ao cliente?',
            content:
                'Nossa equipe de suporte está pronta para ajudar com quaisquer dúvidas ou problemas. Você pode nos contatar pelo e-mail support@ecme.com, pelo telefone 0800-123-4567 ou pelo chat ao vivo em nosso site. Estamos comprometidos em oferecer um atendimento rápido e eficaz.',
            defaultExpand: true,
        },
        {
            title: 'Como altero os dados da minha conta?',
            content:
                'Para atualizar os dados da sua conta, faça login, acesse a seção "Segurança" e faça as alterações necessárias. Lembre-se de salvar as atualizações.',
            defaultExpand: false,
        },
        {
            title: 'Minhas informações pessoais estão seguras?',
            content:
                'Sim, priorizamos a segurança dos seus dados pessoais. Nosso site utiliza criptografia e medidas de segurança padrão do mercado. Consulte nossa Política de Privacidade para mais detalhes sobre como protegemos suas informações.',
            defaultExpand: false,
        },
    ],
}

export const questionCategory: Record<string, string> = {
    subscription: 'Informações sobre a assinatura',
    billing: 'Cobrança e pagamentos',
    others: 'Outros',
}
