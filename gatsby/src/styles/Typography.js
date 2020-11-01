import { createGlobalStyle } from 'styled-components';

//import font from '../assets/fonts/frenchfries.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'noodle';
    src: url('fonts/big_noodle_titling.eot');
    src: local('☺'), url('fonts/big_noodle_titling.woff') format('woff'), url('fonts/big_noodle_titling.ttf') format('truetype'), url('fonts/big_noodle_titling.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}  
    
    `;
export default Typography;
