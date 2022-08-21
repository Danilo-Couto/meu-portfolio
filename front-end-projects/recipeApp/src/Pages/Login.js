import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginCss } from '../Styles/general';

const minLength = 6;

export default function Login() {
  const [emailUser, setEmailUser] = useState('');
  const [pass, setPass] = useState('');
  const [btnLogin, setBtnLogin] = useState(true);
  const history = useHistory();

  const checkLogin = useCallback(async () => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(emailUser)
    && emailUser && pass.length > minLength) setBtnLogin(false);
  }, [emailUser, pass.length]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin, emailUser, pass]);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: emailUser }));
    history.push('foods');
  };

  return (
    <div>
      <LoginCss>
        <input
          type="text"
          data-testid="email-input"
          placeholder="e-mail"
          value={ emailUser }
          onChange={ (e) => setEmailUser(e.target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          value={ pass }
          onChange={ (e) => setPass(e.target.value) }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ btnLogin }
          onClick={ onSubmitLogin }
        >
          Login
        </button>
      </LoginCss>
    </div>
  );
}
