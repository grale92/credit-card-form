import styled from "styled-components";
import cardBg from "../../shared/assets/img/card-bg.jpeg";

export const ContentBox = styled.div`
  position: absolute;
  width: 400px;
  height: 254px;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1000px;
`;

export const CardContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  &.rotate {
    transform: rotateY( 180deg );
    transition: transform 1s;
  }
`;

export const Card = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${cardBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  color: #FFF;
  box-shadow: 3px 2px 28px 15px rgba(0,0,0,0.28); 

  &.front {
    backface-visibility: hidden;
  }

  &.back {
    backface-visibility: hidden;
    transform: rotateY( 180deg );
  }
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
`;

export const ExpiresValue = styled(CardHolderValue)`
  right: 20px;
`;

export const CardNumber = styled.div`
  font-family: 'OCR A Std', sans-serif;
  position: absolute;
  top: 120px;
  font-size: 1.3em;
`;

export const CvvLabel = styled.p`
  font-family: 'OCR A Std', sans-serif;
  position: absolute;
  right: 33px;
  top: 10px;
  font-size: 0.6em;
`;

export const CvvTextBox = styled.div`
  font-family: 'OCR A Std', sans-serif;
  position: absolute;
  top: 35px;
  left: 20px;
  width: 90%;
  background-color: #FFF;
  height: 40px;
  border-radius: 5px;
  color: #000;
  text-align: right;
  padding: 11px;
  box-sizing: border-box;
`;

export const CardVendorBack = styled.img`
  position: absolute;
  top: 100px;
  width: 60px;
  opacity: 0.7;
  right: 20px;
`;