import { Card, FormItem, Checkbox } from "@/components/ui";
import { Controller } from "react-hook-form";
import { FormSectionBaseProps } from "./types";

type SpecialitySectionProps = FormSectionBaseProps;

const specialities = [
    { value: 'pedreiro', label: 'Pedreiro' },
    { value: 'marceneiro', label: 'Marceneiro' },
    { value: 'encanador', label: 'Encanador' },
    { value: 'pintor', label: 'Pintor' },
    { value: 'servicos-gerais', label: 'Serviços Gerais' },
];

const SpecialitySection = ({ control, errors }: SpecialitySectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Especialidades</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    invalid={Boolean(errors.specialities)}
                    errorMessage={errors.specialities?.message}
                >
                    <Controller
                        name="specialities"
                        control={control}
                        render={({ field }) => (
                            <Checkbox.Group
                                vertical
                                value={(field.value || []).map(String)}
                                onChange={(selected) => field.onChange(selected)}
                            >
                                {specialities.map((speciality) => (
                                    <Checkbox
                                        key={speciality.value}
                                        value={speciality.value}
                                    >
                                        {speciality.label}
                                    </Checkbox>
                                ))}
                            </Checkbox.Group>
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    );
};

export default SpecialitySection;