import { CardDataProvider } from "../../shared/context/CardDataContext";
import FormCard from "../FormCard";
import { BaseStyles } from "./BaseStyles";
import { NormalizeStyles } from "./NormalizeStyles";

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <CardDataProvider>
        <FormCard />
      </CardDataProvider>
    </>
  );
}

export default App;
