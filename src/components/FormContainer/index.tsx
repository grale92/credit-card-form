import { Input, Label } from "./Styles";

export default function FormContainer() {
  return (
    <>
      <Label htmlFor="cardNumber">Numero della carta:</Label>
      <Input
        id="cardNumber"
        type="text"
        required
      />
      <Label htmlFor="cardName">Nome sulla carta:</Label>
      <Input
        id="cardName"
        type="text"
        required
      />
      <Label htmlFor="expirationDate">Data di scadenza:</Label>
      <Input
        id="expirationDate"
        type="text"
        required
      />
      <Label htmlFor="cvv">CVV:</Label>
      <Input
        id="cvv"
        type="text"
        required
      />
      <button type="submit">Salva</button>
    </>
  )
}