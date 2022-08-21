import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { getLocalStorage } from '../services/LocalStorage';
import { ProfileCSS } from '../Styles/general2';

const emailUser = () => getLocalStorage('user');

export default function Profile() {
  const history = useHistory();

  const handleClick = ({ target: { name } }) => {
    if (name.length > 0) {
      history.push(`${name}`);
    } else {
      history.push('');
      localStorage.clear();
    }
  };

  return (
    <div>
      <Header />
      <ProfileCSS>
        <h1
          data-testid="profile-email"
        >
          {emailUser !== null && emailUser.email}
        </h1>
        <button
          type="button"
          data-testid="profile-done-btn"
          name="done-recipes"
          onClick={ handleClick }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          name="favorite-recipes"
          onClick={ handleClick }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClick }
        >
          Logout
        </button>
      </ProfileCSS>
      <Footer />
    </div>);
}
