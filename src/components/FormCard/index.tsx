import CreditCard from "../CreditCard";
import FormContainer from "../FormContainer";
import { Container } from "./Styles";

export default function FormCard() {
  return (
    <Container>
      <CreditCard />
      <FormContainer />
    </Container>
  );
}