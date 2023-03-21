import { useContext } from "react";
import { CardDataContext } from "../../shared/context/CardDataContext";
import { formatCardNumber, getCardCompany } from "../../shared/utils/functions";
import { Input, InputGroup, Label, Select } from "./Styles";

export default function FormContainer() {
  const { cardData, updateCardData } = useContext(CardDataContext);

  const onCardNumberChanged = (newValue: string) => {
    const unspacedCardNumber = newValue.replaceAll(/\D/g, '').trim();
    const company = getCardCompany(unspacedCardNumber);
    let formattedCardNumber = unspacedCardNumber;
    if (company) {
      formattedCardNumber = formatCardNumber(company, unspacedCardNumber);
    }
    updateCardData("company", company);
    updateCardData("cardNumber", formattedCardNumber);
  }

  const renderYearOptions = () => {
    let yearsArray = [<option key="yOption-empty" value="" disabled selected>Year</option>];
    const currentYear = new Date().getFullYear().toString().substring(2);
    const currentYearNumber = Number.parseInt(currentYear);
    for (let i = currentYearNumber; i <= currentYearNumber + 12; i++) {
      const value = i.toString();
      yearsArray.push(<option key={`yOption-${value}`} value={value}>{value}</option>);
    }
    return yearsArray;
  }

  const renderMonthOptions = () => {
    let monthsArray = [<option key="mOption-empty" value="" disabled selected>Month</option>];
    for (let i = 1; i <= 12; i++) {
      const value = i.toString().padStart(2, "0");
      monthsArray.push(<option key={`mOption-${value}`} value={value}>{ value }</option>)
    }
    return monthsArray;
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
            <Select
              id="expirationMonth"
              required
              value={cardData.expirationMonth}
              onChange={e => updateCardData("expirationMonth", e.target.value)}
            >
              { renderMonthOptions() }
            </Select>
          </InputGroup>
        </div>
        <div className="col-4">
          <InputGroup>
            <Label htmlFor="expirationYear">Expiration Date</Label>
            <Select
              id="expirationYear"
              required
              value={cardData.expirationYear}
              onChange={e => updateCardData("expirationYear", e.target.value)}
            >
              { renderYearOptions() }
            </Select>
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