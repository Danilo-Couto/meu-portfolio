import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import { FooterCss } from '../Styles/general';

export default function Footer() {
  const history = useHistory();

  return (
    <FooterCss
      /* style={ {
        position: 'fixed',
        bottom: 0,
      } } */
      data-testid="footer"
    >
      <button
        type="button"
        onClick={ () => { history.push('/drinks'); } }
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </button>
      <button
        type="button"
        onClick={ () => { history.push('/explore'); } }
      >
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="exploreIcon"
        />
      </button>
      <button
        type="button"
        onClick={ () => { history.push('/foods'); } }
      >
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="mealIcon"
        />
      </button>
    </FooterCss>
  );
}
