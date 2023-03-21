import styled from "styled-components";
import { color } from "../../shared/utils/mixins";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  min-height: 80px;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.8rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${color.secondaryLight};
  font-weight: 600;
  font-smooth: always;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border: 0;
  color: ${color.secondaryLight};
  font-weight: 700;
  background-color: ${color.primary};
  border-radius: 5px;
  cursor: pointer;
`