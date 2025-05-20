import { useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Checkbox from '@/components/ui/Checkbox'
import Input from '@/components/ui/Input'
import { Form, FormItem } from '@/components/ui/Form'
import useContractorList from '../hooks/useContractorList'
import { TbFilter } from 'react-icons/tb'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'

type FormSchema = {
    specialities: Array<string>
    status: Array<string>
}

const specialities = [
    'Pedreiro',
    'Marceneiro',
    'Eletricista',
]

const status = [
    'Ativo',
    'Inativo',
]

const validationSchema: ZodType<FormSchema> = z.object({
    status: z.array(z.string()),
    specialities: z.array(z.string()),
})

const ContractorListTableFilter = () => {
    const [dialogIsOpen, setIsOpen] = useState(false)

    const { filterData, setFilterData } = useContractorList()

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = () => {
        setIsOpen(false)
    }

    const { handleSubmit, reset, control } = useForm<FormSchema>({
 
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = (values: FormSchema) => {
        //setFilterData()
        setIsOpen(false)
    }

    return (
        <>
            <Button icon={<TbFilter />} onClick={() => openDialog()}>
                Filtro
            </Button>
            <Dialog
                isOpen={dialogIsOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h4 className="mb-4">Filter</h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormItem label="Especialidades">
                        <Controller
                            name="specialities"
                            control={control}
                            render={({ field }) => (
                                <Checkbox.Group
                                    vertical
                                    className="flex mt-4"
                                    {...field}
                                >
                                    {specialities.map((source, index) => (
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
                    <FormItem label="Status">
                        <Controller
                            name="status"
                            control={control}
                            render={({ field }) => (
                                <Checkbox.Group
                                    vertical
                                    className="flex mt-4"
                                    {...field}
                                >
                                    {status.map((source, index) => (
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
                            Reset
                        </Button>
                        <Button type="submit" variant="solid">
                            Apply
                        </Button>
                    </div>
                </Form>
            </Dialog>
        </>
    )
}

export default ContractorListTableFilter
