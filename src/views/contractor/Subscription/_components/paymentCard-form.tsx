
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
} from "@/components/ui/form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InputMask } from "@react-input/mask";
import { authFetch } from "@/lib/authFetch";
import { useRouter } from "next/navigation";

export default function PaymentCardForm() {
  const router = useRouter();
  const formSchema = z.object({
    numberCard: z.string(),
    nameCard: z.string().min(4),
    dateYear: z.string(),
    dateMonth: z.string(),
    cvv: z.string(),
    cpf: z.string(),
  });

  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberCard: "",
      nameCard: "",
      dateYear: "",
      dateMonth: "",
      cvv: "",
      cpf: "",
    }
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data: any) => {
    let PagSeguro = (window as any)["PagSeguro"];
    if (!PagSeguro) {
      alert("Não foi possível realizar o pagamento, entre em contato com o administrador.")
      return;
    }

    let cardData = {
      publicKey: process.env.NEXT_PUBLIC_PB_KEY,
      holder: data.nameCard,
      number: data.numberCard.replace(/[^\d.-]+/g, ''),
      expMonth: data.dateMonth,
      expYear: data.dateYear,
      securityCode: data.cvv
    };

    const card = PagSeguro.encryptCard(cardData);
    const encrypted = card.encryptedCard;
    const hasErrors = card.hasErrors;
    if (hasErrors) {
      alert('Não foi possível realizar o pagamento. ' + card.errors.join(' '));
      console.log(hasErrors);
      return;
    }

    const url = process.env.NEXT_PUBLIC_API;
    let response = await authFetch(`${url}/payment/subscribe`, {
      method: "POST",
      body: JSON.stringify(
        {
          nameCard: data.nameCard,
          numberCard: data.numberCard.replace(/[^\d.-]+/g, ''),
          month: data.dateMonth,
          year: data.dateYear,
          cvv: data.cvv,
          cpf: data.cpf.replace(/[^\d.-]+/g, ''),
          card: encrypted
        }
      ),
    })

    if(response.success){
      alert('Pagamento efetuado com sucesso!');
      let configs = JSON.parse(localStorage.getItem('configs') ?? '{}')
      configs.hasSubscription = true;
      localStorage.setItem('configs', JSON.stringify(configs))

      router.push('/');
    } else {
      alert('Não foi possível realizar o pagamento no momento, tente novamente mais tarde.')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Assinatura via cartão</CardTitle>
            <CardDescription>Insira seus dados e realize o pagamento.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Insira o nome como está no Cartão"
                {...register("nameCard")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">Número do Cartão</Label>
              <Input
                id="number"
                placeholder="Inisra o número do cartão"
                {...register("numberCard")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number">CPF</Label>
              <InputMask
                component={Input}
                mask="___.___.___-__"
                replacement={{ _: /\d/ }}
                placeholder="Digite seu CPF"
                {...register("cpf")}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="month">Mês</Label>
                <select id="month" {...register("dateMonth")}>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Ano</Label>
                <select id="year" {...register("dateYear")}>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option
                      key={i}
                      value={`${new Date().getFullYear() + i}`}
                    >
                      {new Date().getFullYear() + i}
                    </option>
                  ))}

                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="CVC"
                  {...register("cvv")}
                />
              </div>
            </div>
          </CardContent>
          <div className="flex justify-center mb-5 gap-4">
            <Button variant={"outline"} type="button">
              Voltar
            </Button>
            <Button>Realizar Pagamento</Button>
          </div>
        </Card>
      </form>
    </>
  );
}
