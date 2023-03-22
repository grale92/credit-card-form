import styled from "styled-components";
import { color } from "../../shared/utils/mixins";

export const Container = styled.form`
  background: #FFF;
  border-radius: 10px;
  padding: 150px 20px 20px 20px;
  margin-top: -120px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 100px 20px 20px 20px;
    margin-top: -80px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  min-height: 90px;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline-color: ${color.secondaryLight};
  }
`;

export const Select = styled.select`
  margin-bottom: 1rem;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.8rem;

  &:focus {
    outline-color: ${color.secondaryLight};
  }
`;

export const Label = styled.label`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${color.secondaryLight};
  font-weight: 600;
  font-smooth: always;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border: 0;
  color: #FFF;
  font-weight: 700;
  background-color: ${color.secondary};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${color.secondaryLight};
  }

  &:focus {
    outline-color: ${color.secondaryLight};
  }
`