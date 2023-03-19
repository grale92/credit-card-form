import { createGlobalStyle } from "styled-components";
import { color } from "../../shared/utils/mixins";

export const BaseStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  html, body {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    background-image: linear-gradient(to right bottom, ${color.primary}, ${color.secondary});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;