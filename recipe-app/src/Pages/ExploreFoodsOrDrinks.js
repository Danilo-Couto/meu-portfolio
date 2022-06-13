import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { fetchRandomDrink, fetchRandomFood } from '../services/Apis';
import { ExploreMenu } from '../Styles/general';

export default function Explore() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [recipe, setRecipe] = useState({});

  const isFood = pathname.includes('food');

  const getRandomRecipe = useCallback(async () => {
    if (isFood) {
      const meal = await fetchRandomFood();
      setRecipe(meal);
    } else {
      const drink = await fetchRandomDrink();
      setRecipe(drink);
    }
  }, [isFood]);

  useEffect(() => {
    getRandomRecipe();
  }, [getRandomRecipe]);

  const surpriseClick = async () => {
    if (isFood) {
      history.push(`/foods/${recipe[0].idMeal}`);
    } else {
      history.push(`/drinks/${recipe[0].idDrink}`);
    }
  };

  return (
    <div>
      <Header showSearch={ false } />
      <ExploreMenu>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => {
            history.push(
              `/explore/${isFood ? 'foods' : 'drinks'}/ingredients`,
            );
          } }
        >
          By Ingredient
        </button>
        {isFood && (
          <button
            type="button"
            data-testid="explore-by-nationality"
            onClick={ () => history.push('/explore/foods/nationalities') }
          >
            By Nationality
          </button>
        )}
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ surpriseClick }
        >
          Surprise me!
        </button>
      </ExploreMenu>
      <Footer />
    </div>);
}
