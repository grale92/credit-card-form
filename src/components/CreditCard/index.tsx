import { useContext } from 'react';
import { Card, CardContainer, CardHolderLabel, CardHolderValue, CardNumber, CardVendor, CardVendorBack, 
  Chip, ContentBox, CvvLabel, CvvTextBox, ExpiresLabel, ExpiresValue } from "./Styles";
import chip from "../../shared/assets/img/chip.png";
import mastercard from "../../shared/assets/img/mastercard.png";
import { CardDataContext } from '../../shared/context/CardDataContext';


export default function CreditCard() {
  const { cardData } = useContext(CardDataContext)

  const showCensoredCvv = (cvv: string) => {
    let arrayStr = [];
    for (let i = 0; i < cvv.length; i++) {
      arrayStr.push("*")
    }
    return arrayStr.join("");
  }

  return (
    <ContentBox>
      <CardContainer className={cardData.side === "back" ? "rotate": ""}>
        <Card className="front">
          <Chip src={chip} />
          <CardVendor src={mastercard} />
          <CardNumber>{ cardData.cardNumber }</CardNumber>
          <CardHolderLabel>Card Holder</CardHolderLabel>
          <CardHolderValue>{ cardData.cardHolder }</CardHolderValue>
          <ExpiresLabel>Expires</ExpiresLabel>
          <ExpiresValue>99/99</ExpiresValue>
        </Card>
        <Card className="back">
          <CvvLabel>CVV</CvvLabel>
          <CvvTextBox>{ showCensoredCvv(cardData.cvv) }</CvvTextBox>
          <CardVendorBack src={mastercard} />
        </Card>
      </CardContainer>
    </ContentBox>
  );
}