import { CardVendor, Chip, Container } from "./Styles";
import chip from "../../shared/assets/img/chip.png";
import mastercard from "../../shared/assets/img/mastercard.png";


export default function CreditCard() {
  return (
    <Container>
      <Chip src={chip} />
      <CardVendor src={mastercard} />
    </Container>
  );
}