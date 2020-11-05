import { createGlobalStyle } from 'styled-components';

import courier from '../assets/fonts/courierNew.woff';
import noodle from '../assets/fonts/noodle.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Courier New';
    src: url(${courier});
  }
  @font-face {
    font-family: 'noodle';
    src: url(${noodle});
  }
 
  `;
export default Typography;
