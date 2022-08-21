import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Provider from './Hooks/Provider';
import GlobalStyle from './Styles/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
