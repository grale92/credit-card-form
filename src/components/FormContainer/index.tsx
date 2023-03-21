import { useContext } from "react";
import { CardDataContext } from "../../shared/context/CardDataContext";
import { Input, InputGroup, Label } from "./Styles";

export default function FormContainer() {
  const { cardData, updateCardData } = useContext(CardDataContext);

  const onCardNumberChanged = (newValue: string) => {
    const formatRegex = /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g;
    const formattedCardNumber = Array.from(newValue.replaceAll(/\D/g, '').matchAll(formatRegex))[0].slice(1, 5).join(' ').trim();
    updateCardData("cardNumber", formattedCardNumber);
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <InputGroup>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              type="text"
              value={cardData.cardNumber}
              onChange={e => onCardNumberChanged(e.target.value)}
              required
            />
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <InputGroup>
            <Label htmlFor="cardHolder">Card Holder</Label>
            <Input
              id="cardHolder"
              type="text"
              value={cardData.cardHolder}
              onChange={e => updateCardData("cardHolder", e.target.value)}
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
              value={cardData.cvv}
              onChange={e => updateCardData("cvv", e.target.value)}
              maxLength={3}
              required
              onFocus={() => updateCardData("side", "back")}
              onBlur={() => updateCardData("side", "front")}
            />
          </InputGroup>
        </div>
      </div>
      <button type="submit">Salva</button>
    </>
  )
}