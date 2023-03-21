import { useContext } from 'react';
import { Card, CardContainer, CardHolderLabel, CardHolderValue, CardNumber, CardVendor, CardVendorBack, 
  Chip, ContentBox, CvvLabel, CvvTextBox, ExpiresLabel, ExpiresValue } from "./Styles";
import { CardDataContext } from '../../shared/context/CardDataContext';

// Images
import chip from "../../shared/assets/img/chip.png";
import mastercard from "../../shared/assets/img/mastercard.png";
import visa from "../../shared/assets/img/visa.png";
import amex from "../../shared/assets/img/amex.png";
import discover from "../../shared/assets/img/discover.png";


export default function CreditCard() {
  const { cardData } = useContext(CardDataContext)

  const showCensoredCvv = (cvv: string) => {
    let arrayStr = [];
    for (let i = 0; i < cvv.length; i++) {
      arrayStr.push("*")
    }
    return arrayStr.join("");
  }

  const getVendorSrc = () => {
    if (cardData.company === "mastercard") {
      return mastercard;
    } else if (cardData.company === "visa") {
      return visa;
    } else if (cardData.company === "amex") {
      return amex;
    } else if (cardData.company === "discover") {
      return discover;
    }
    return "";
  }

  return (
    <ContentBox>
      <CardContainer className={cardData.side === "back" ? "rotate": ""}>
        <Card className="front">
          <Chip src={chip} />
          <CardVendor src={getVendorSrc()} />
          <CardNumber>{ cardData.cardNumber }</CardNumber>
          <CardHolderLabel>Card Holder</CardHolderLabel>
          <CardHolderValue>{ cardData.cardHolder }</CardHolderValue>
          <ExpiresLabel>Expires</ExpiresLabel>
          <ExpiresValue>{ cardData.expirationMonth ? cardData.expirationMonth : "MM" }/{ cardData.expirationYear ? cardData.expirationYear : "YY" }</ExpiresValue>
        </Card>
        <Card className="back">
          <CvvLabel>CVV</CvvLabel>
          <CvvTextBox>{ showCensoredCvv(cardData.cvv) }</CvvTextBox>
          <CardVendorBack src={getVendorSrc()} />
        </Card>
      </CardContainer>
    </ContentBox>
  );
}