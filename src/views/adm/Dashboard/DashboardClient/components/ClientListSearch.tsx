import Input from '@/components/ui/Input'

type ClientListSearchProps = {
    onInputChange: (value: string) => void
}

const ClientListSearch = ({ onInputChange }: ClientListSearchProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(e.target.value)
    }

    return (
        <Input
            placeholder="Buscar cliente..."
            onChange={handleChange}
            className="w-full md:w-64"
        />
    )
}

export default ClientListSearch