
import { Card, FormItem, Checkbox } from "@/components/ui";
import { Controller } from "react-hook-form";
import { FormSectionBaseProps } from "./types";
import { useEffect, useState } from "react";
import { apiGetSpecialityList } from "@/services/ContractorService";

type SpecialitySectionProps = FormSectionBaseProps;

type Speciality = {
    id: number;
    fullname: string;
};

const SpecialitySection = ({ control, errors }: SpecialitySectionProps) => {
    const [specialities, setSpecialities] = useState<Speciality[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSpecialities = async () => {
            try {
                setLoading(true);
                const data = await apiGetSpecialityList<Speciality[]>();
                setSpecialities(data);
            } catch (error) {
                console.error('Erro ao carregar especialidades:', error);
            } finally {
                setLoading(false);
            }
        };

        loadSpecialities();
    }, []);

    if (loading) {
        return (
            <Card>
                <h4 className="mb-6">Especialidades</h4>
                <div className="flex items-center justify-center p-4">
                    <p>Carregando especialidades...</p>
                </div>
            </Card>
        );
    }

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
                                onChange={(selected) => {
                                    const numericValues = selected.map(Number);
                                    field.onChange(numericValues);
                                }}
                            >
                                {specialities.map((speciality) => (
                                    <Checkbox
                                        key={speciality.id}
                                        value={speciality.id.toString()}
                                    >
                                        {speciality.fullname}
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
