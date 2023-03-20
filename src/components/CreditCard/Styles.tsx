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