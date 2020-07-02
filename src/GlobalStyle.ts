import reset from 'styled-reset';
import { createGlobalStyle } from './typed-components';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;
  }
  a{ 
    color:inherit;
    text-decoration:none;
  }
  input,
  button{&:focus,&:active{outline:none}
  }
  h1,h2,h3,h4,h5,h6{
    font-family:'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
