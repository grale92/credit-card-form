import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  height: 70vh;
  width: 70vh;
  background: #FFF;
  border-radius: 10px;
  padding: 20px;
`;

export const CreditCard = styled.div`
  position: relative;
  top: -150px;
  margin: auto;
  background: #999;
  width: 400px;
  height: 254px;
  border-radius: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;