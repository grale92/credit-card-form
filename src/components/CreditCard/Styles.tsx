import styled from "styled-components";
import cardBg from "../../shared/assets/img/card-bg.jpeg";

export const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 400px;
  height: 254px;
  background-image: url(${cardBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Chip = styled.img`
  position: absolute;
  width: 65px;
`;

export const CardVendor = styled.img`
  position: absolute;
  width: 65px;
  right: 20px;
`;

export const CardHolderLabel = styled.div`
  font-family: 'OCR A Std', sans-serif;
  position: absolute;
  bottom: 50px;
  font-size: 0.7em;
  color: #FFF;
  opacity: 0.7;
`;

export const ExpiresLabel = styled(CardHolderLabel)`
  right: 20px;
`;

export const CardHolderValue = styled.div`
  font-family: 'OCR A Std', sans-serif;
  position: absolute;
  bottom: 20px;
  font-size: 1em;
  color: #FFF;
`;

export const ExpiresValue = styled(CardHolderValue)`
  right: 20px;
`;

export const CardNumber = styled.div`
  font-family: 'OCR A Std', sans-serif;
  position: absolute;
  top: 120px;
  font-size: 1.3em;
  color: #FFF;
`;