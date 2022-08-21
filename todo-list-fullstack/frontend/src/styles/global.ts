import { darken, lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme ? '#F1F1F1' : 'F1F1F1' };
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme ? '#F1F1F1' : 'F1F1F1' )};
    }
  }

  body {
    margin: 2rem;
    background-image: url('image.webp');
    background-size: cover;
    font: 400 1rem 'Montserrat', sans-serif;
    color: #F1F1F1;
  }
  
  input {
    font: 400 1rem 'Montserrat', sans-serif;
    margin: 1rem;
    border: 2px solid #CDCDCD;
    border-radius: 0.3rem;
  }

  select {
    font: 400 1rem 'Montserrat', sans-serif;
    margin: 1rem;
    border: 2px solid #CDCDCD;
    border-radius: 0.3rem;
  }

  .todo-list {
    padding:  rem;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  h4 {
    text-transform: uppercase;
  }

  p {
    text-transform: capitalize;
  }

  form > button {
    cursor: pointer;
    border: none;
    margin: 0.5rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    background: #3F7FBE;
    color: #F1F1F1;
    transition: 0.5s;
    height: 2rem;
    width: 10rem;

    &:hover {
        background: ${({ theme }) => darken(0.1, theme ? '#3F7FBE' : 'F1F1F1' )};
      }
  }

  div > button {
    cursor: pointer;
    border: none;
    margin-right: 0.4rem;
    margin-bottom: 0.6rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    transition: 0.5s;
    height: 2rem;
    width: 10rem;
    color: #F1F1F1;
  }
  
  .delete{
    background: #AA0000;
    &:hover {
        background: ${({ theme }) => darken(0.1, theme ? '#AA0000' : 'F1F1F1' )};
      }
  }

  .edit{
    background: #006A4E;
    &:hover {
        background: ${({ theme }) => darken(0.1, theme ? '#006A4E' : 'F1F1F1' )};
      }
  }

  .cancel{
    background: #FEBE10;
    &:hover {
        background: ${({ theme }) => darken(0.1, theme ? '#FEBE10' : 'F1F1F1' )};
      }
  }
  /* .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  } */

`;
