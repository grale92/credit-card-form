import { useContext } from 'react';
import { CardHolderLabel, CardHolderValue, CardNumber, CardVendor, Chip, Container, ExpiresLabel, ExpiresValue } from "./Styles";
import chip from "../../shared/assets/img/chip.png";
import mastercard from "../../shared/assets/img/mastercard.png";
import { CardDataContext } from '../../shared/context/CardDataContext';


export default function CreditCard() {
  const { cardData } = useContext(CardDataContext)

  return (
    <Container>
      <Chip src={chip} />
      <CardVendor src={mastercard} />
      <CardNumber>{ cardData.cardNumber }</CardNumber>
      <CardHolderLabel>Card Holder</CardHolderLabel>
      <CardHolderValue>{ cardData.cardHolder }</CardHolderValue>
      <ExpiresLabel>Expires</ExpiresLabel>
      <ExpiresValue>99/99</ExpiresValue>
    </Container>
  );
}