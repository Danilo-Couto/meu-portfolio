/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../Hooks/Context';
import profileIcon from '../images/profileIcon.svg';
import searchTop from '../images/searchIcon.svg';
import { HeaderCss } from '../Styles/general';
import { SearchCss } from '../Styles/general2';

export default function Header(...props) {
  const history = useHistory();
  const [searchInputOn, setSearchInputOn] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [radioInput, setRadioInput] = useState('INGR');
  const { pathname } = useLocation();
  const { fetchMealsWithOptions, fetchDrinksWithOptions } = useContext(Context);
  const [{ showSearch }] = props;

  const foodsOrDrinks = () => {
    if (pathname.includes('foods')) {
      fetchMealsWithOptions(searchInput, radioInput);
    } else {
      fetchDrinksWithOptions(searchInput, radioInput);
    }
  };

  const submitToAPI = (e) => {
    e.preventDefault();
    if (radioInput === 'FIRST' && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      foodsOrDrinks();
    }
    setSearchInput('');
    // setRadioInput('');
  };

  const headerTitle = () => {
    if (pathname.includes('explore/foods/ingredients')) return 'Explore Ingredients';
    if (pathname.includes('explore/drinks/ingredients')) return 'Explore Ingredients';
    if (pathname.includes('explore/foods/nationalities')) return 'Explore Nationalities';
    if (pathname.includes('/explore/foods')) return 'Explore Foods';
    if (pathname.includes('/explore/drinks')) return 'Explore Drinks';
    if (pathname.includes('profile')) return 'Profile';
    if (pathname.includes('done')) return 'Done Recipes';
    if (pathname.includes('favorite-recipes')) return 'Favorite Recipes';
    if (pathname.includes('food')) return 'Foods';
    if (pathname.includes('drink')) return 'Drinks';
    if (pathname.includes('explore')) return 'Explore';
  };

  return (
    <HeaderCss>
      <div>
        <button
          type="button"
          onClick={ () => { history.push('/profile'); } }
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profileIcon"
          />
        </button>
      </div>
      <div>
        <h2
          data-testid="page-title"
        >
          {headerTitle()}
        </h2>
      </div>
      <div>
        {showSearch
        && <button
          type="button"
          onClick={ () => { setSearchInputOn(!searchInputOn); } }
        >
          <img
            data-testid="search-top-btn"
            src={ searchTop }
            alt="searchTop"
          />
        </button>}
        {searchInputOn && (
          <SearchCss>
            <form onSubmit={ submitToAPI }>
              <input
                type="text"
                data-testid="search-input"
                placeholder="Buscar por"
                onChange={ (e) => { setSearchInput(e.target.value); } }
                value={ searchInput }
              />
              <input
                type="radio"
                data-testid="ingredient-search-radio"
                name="radio-search"
                onChange={ (e) => { setRadioInput(e.target.value); } }
                value="INGR"
                checked={ radioInput === 'INGR' }
              />
              Por Ingrediente
              <input
                type="radio"
                data-testid="name-search-radio"
                name="radio-search"
                onChange={ (e) => { setRadioInput(e.target.value); } }
                value="NAME"
                checked={ radioInput === 'NAME' }
              />
              Por Nome
              <input
                type="radio"
                data-testid="first-letter-search-radio"
                name="radio-search"
                onChange={ (e) => { setRadioInput(e.target.value); } }
                value="FIRST"
                checked={ radioInput === 'FIRST' }
              />
              Por 1a Letra
              <button
                type="submit"
                data-testid="exec-search-btn"
              >
                Search
              </button>
            </form>
          </SearchCss>
        )}
      </div>
    </HeaderCss>
  );
}
