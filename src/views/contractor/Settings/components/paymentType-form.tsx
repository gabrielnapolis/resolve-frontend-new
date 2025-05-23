import Group from "@/components/ui/Radio/Group";

interface PaymentTypeProps {
  onChange: (value: string) => void;
}

 const PaymentType =({ onChange }: PaymentTypeProps)=> {
  return (
    <div>
      <h3 className="text-lg font-medium mb-5">Realizar Assinatura</h3>
      <Group  >
        <div className="flex items-center space-x-2">
      
          <label htmlFor="r1">Pix</label>
        </div>
        <div className="flex items-center space-x-2">
       
          <label htmlFor="r3">Cartão</label>
        </div>
      </Group>
    </div>
  );
}

export default PaymentType