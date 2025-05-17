const ClientListSelected = () => {
    const selectedClients = [
        { fullname: 'João Silva', email: 'joao.silva@example.com' },
        { fullname: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    ]

    return (
        <div className="mt-4">
            <h4 className="text-lg font-bold">Clientes Selecionados</h4>
            <ul className="list-disc pl-5">
                {selectedClients.map((client, index) => (
                    <li key={index}>
                        {client.fullname} - {client.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClientListSelected