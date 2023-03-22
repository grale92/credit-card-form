import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 5px;
  }
`;