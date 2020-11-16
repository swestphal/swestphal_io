import { createGlobalStyle } from 'styled-components';

import enriqueta from '../assets/fonts/Enriqueta-Regular.ttf';
import jura from '../assets/fonts/Jura-Regular.ttf';

import caudex from '../assets/fonts/Caudex-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'enriqueta';
    src: url(${enriqueta});
  }
  @font-face {
    font-family: 'caudex';
    src: url(${caudex});
  }
  @font-face {
    font-family: 'jura';
    src: url(${jura});
  }
 
  `;
export default Typography;
