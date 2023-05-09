import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
      display: none;
    }

  }
  
  body {
    height: 100%;;
    font-family: Inter, sans-serif;
    font-size: ${theme.size.normal};
    font-weight: ${theme.weight.regular};
    line-height: 18px;
    color: ${theme.color.black};
  }

  #app {
    display: block;
    width: 100%;
    height: 100%;
  }


  a {
    color: inherit;
    text-decoration: none;
  }
  
  #modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
  }

  #menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
  }

`;
