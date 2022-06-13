import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input {
  max-width: 100vw;
  border: none;
  margin: 0.rem;
  height: 2rem;
  }
  button {
  background-color: #333333;
  text-transform: uppercase;
  border-width: 1px;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 2px #050505;  
  color: #FFFFFF;
  border-radius: 0.25rem;
  margin: 0.25rem;
  padding: 0.5rem;
  box-shadow: 1px 1px 4px #333333;  
  font-weight: bold;
  } 
  button:hover {
    cursor:pointer; }
  button:active {
    background-color: #ff6347;
    box-shadow: 0px 2.5px 0px 0px rgba(64, 189, 135, 0.7);
    transform: translateY(2.5px);
    transition: 100ms; }
  h1, h2, h3{
  text-transform: uppercase;
  color: black;
  }
  img {
  width: 100%;
  max-width: 100%;
  }
`;

export default GlobalStyle;
