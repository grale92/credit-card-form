import React, { createContext, useState } from 'react';

interface CardContextType {
  cardData: {
    cardNumber: string;
    cardHolder: string;
    expirationYear: string;
    expirationMonth: string;
    cvv: string;
  }
  updateCardData: (fieldName: string, value: string) => void;
}

const initialValues: CardContextType = {
  cardData: {
    cardNumber: "",
    cardHolder: "",
    expirationYear: "",
    expirationMonth: "",
    cvv: ""
  },
  updateCardData: () => {}
};

export const CardDataContext = createContext<CardContextType>(initialValues);

export const CardDataProvider = ({ children }: { children: React.ReactNode}) => {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationYear: "",
    expirationMonth: "",
    cvv: ""
  });

  const updateCardData = (fieldName: string, value: string) => {
    setCardData((prev) => ({...prev, [fieldName]: value}));
  }

  return (
    <CardDataContext.Provider value={{ cardData, updateCardData }}>
      { children }
    </CardDataContext.Provider>
  );
}

