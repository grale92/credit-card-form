import { Input, InputGroup, Label } from "./Styles";

export default function FormContainer() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <InputGroup>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              type="text"
              required
            />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <InputGroup>
            <Label htmlFor="cardName">Card Holder</Label>
            <Input
              id="cardName"
              type="text"
              required
            />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <InputGroup>
            <Label htmlFor="expirationYear">Expiration Date</Label>
            <Input
              id="expirationYear"
              type="text"
              required
            />
          </InputGroup>
        </div>
        <div className="col-4">
          <InputGroup>
            <Input
              id="expirationMonth"
              type="text"
              required
            />
          </InputGroup>
        </div>
        <div className="col-4">
          <InputGroup>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="text"
              required
            />
          </InputGroup>
        </div>
      </div>
      <button type="submit">Salva</button>
    </>
  )
}