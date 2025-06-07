export function formatPhoneNumber(phone: string): string {
    const cleaned = ('' + phone).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return phone
}

export function formatCPF(cpf: string): string {
    const cleaned = ('' + cpf).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/)
    if (match) {
        return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`
    }
    return cpf
}

export function formatDate(date: string): string {
    const cleaned = ('' + date).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{4})$/)

    if (match) {
        return `${match[1]}/${match[2]}/${match[3]}`
    }
    return date
}

export function getContractorImg(): string {
    const randomNum = Math.floor(Math.random() * 8) + 1
    const formattedNum = randomNum.toString().padStart(2, '0')
    return `/img/profiles/${formattedNum}.png`
}
