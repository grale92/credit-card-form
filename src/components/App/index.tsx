import { CardDataProvider } from "../../shared/context/CardDataContext";
import FormCard from "../FormCard";
import { BaseStyles } from "./BaseStyles";

function App() {
  return (
    <>
      <BaseStyles />
      <CardDataProvider>
        <FormCard />
      </CardDataProvider>
    </>
  );
}

export default App;
