import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Checkbox from '@/components/ui/Checkbox'
import Input from '@/components/ui/Input'
import { Form, FormItem } from '@/components/ui/Form'
import { TbAdjustments, TbFilter } from 'react-icons/tb'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'

type FormSchema = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

const channelList = [
    'Pintor',
    'Marceneiro',
    'Carpinteiro',
    'Pedreiro',	
    'Eletricista',
]

const cityList = [
    'Goiânia',
    'Aparecida de Goiânia',
    'Senador Canedo',
    'Trindade',
    'Anápolis',	
]

const validationSchema: ZodType<FormSchema> = z.object({
    purchasedProducts: z.string(),
    purchaseChannel: z.array(z.string()),
})

const SearchFilter = () => {
    const [dialogIsOpen, setIsOpen] = useState(false)


    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = () => {
        setIsOpen(false)
    }

    const { handleSubmit, reset, control } = useForm<FormSchema>({
       // defaultValues: filterData,
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = (values: FormSchema) => {
        //setFilterData(values)
        setIsOpen(false)
    }

    return (
        <>
            <Button
                size="xs"
                shape="circle"
                variant="solid"
                icon={<TbAdjustments />}
                onClick={() => openDialog()}
            />
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h4 className="mb-4">Filtros</h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormItem label="Serviços">
                        <Controller
                            name="purchaseChannel"
                            control={control}
                            render={({ field }) => (
                                <Checkbox.Group
                                    vertical
                                    className="flex mt-4"
                                    {...field}
                                >
                                    {channelList.map((source, index) => (
                                        <Checkbox
                                            key={source + index}
                                            name={field.name}
                                            value={source}
                                            className="justify-between flex-row-reverse heading-text"
                                        >
                                            {source}
                                        </Checkbox>
                                    ))}
                                </Checkbox.Group>
                            )}
                        />
                    </FormItem>

                    <FormItem label="Cidade">
                        <Controller
                            name="purchaseChannel"
                            control={control}
                            render={({ field }) => (
                                <Checkbox.Group
                                    vertical
                                    className="flex mt-4"
                                    {...field}
                                >
                                    {cityList.map((source, index) => (
                                        <Checkbox
                                            key={source + index}
                                            name={field.name}
                                            value={source}
                                            className="justify-between flex-row-reverse heading-text"
                                        >
                                            {source}
                                        </Checkbox>
                                    ))}
                                </Checkbox.Group>
                            )}
                        />
                    </FormItem>
                    <div className="flex justify-end items-center gap-2 mt-4">
                        <Button type="button" onClick={() => reset()}>
                            Limpar
                        </Button>
                        <Button type="submit" variant="solid">
                            Aplicar
                        </Button>
                    </div>
                </Form>
            </Dialog>
        </>
    )
}

export default SearchFilter
