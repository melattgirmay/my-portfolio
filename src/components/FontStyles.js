// FontStyles.js
import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`

  /* Import the Nunito font */
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

  /* Apply the fonts to specific elements or global styles as needed */
  body {
    font-family: 'Nunito', sans-serif;
  }

  /* Add additional styles for other elements as needed */
`;

export default FontStyles;
