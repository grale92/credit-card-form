import styled from "styled-components";

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

export const Label = styled.label`
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`;