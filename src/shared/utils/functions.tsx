import { cardNumbersRegex, startPatternRegex } from "./constants";

export const validateCardNumber = (cardNumber: string): boolean => {
  for (const regex of Object.values(cardNumbersRegex)) {
    if (cardNumber.match(regex)) {
      return true;
    }
  }

  return false;
}

export const getCardCompany = (cardNumber: string): string => {
  for (const [company, regex] of Object.entries(startPatternRegex)) {
    if (cardNumber.match(regex)) {
      return company;
    }
  }
  
  return "";
}

export const formatCardNumber = (company: string, cardNumber: string): string => {
  if (["mastercard", "visa", "discover"].includes(company)) {
    const formatRegex = /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g;
    return Array.from(cardNumber.matchAll(formatRegex))[0].slice(1, 5).join(' ').trim();
  } else if (company === "amex") {
    const formatRegex = /(\d{0,4})(\d{0,6})(\d{0,5})/g;
    return Array.from(cardNumber.matchAll(formatRegex))[0].slice(1, 4).join(' ').trim();
  }

  return cardNumber;
}