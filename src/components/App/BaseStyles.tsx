import { createGlobalStyle } from "styled-components";
import { color } from "../../shared/utils/mixins";

export const BaseStyles = createGlobalStyle`

  html, body {
    min-width: 768px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    background-image: linear-gradient(to right bottom, ${color.primary}, ${color.secondary});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
  }

  .col-4 {
    grid-column: span 4;
  }

  .col-6 {
    grid-column: span 6;
  }

  .col-8 {
    grid-column: span 8;
  }

  .col-12 {
    grid-column: span 12;
  }
`;