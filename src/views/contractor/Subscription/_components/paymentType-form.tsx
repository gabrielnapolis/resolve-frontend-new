
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

interface PaymentTypeProps {
  onChange: (value: string) => void;
}

export default function PaymentType({ onChange }: PaymentTypeProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-5">Realizar Assinatura</h3>
      <RadioGroup defaultValue="card" onValueChange={onChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pix" id="r1"/>
          <Label htmlFor="r1">Pix</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="r3" />
          <Label htmlFor="r3">Cartão</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
