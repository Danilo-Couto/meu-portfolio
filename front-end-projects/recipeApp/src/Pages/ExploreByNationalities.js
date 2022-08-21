import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { nationList } from '../services/Apis';
import Cards from '../Components/Cards';
import Context from '../Hooks/Context';
import { RecipeListByNationDiv } from '../Styles/general';

const limitDisplayCards = 12;

export default function ExploreByNationalities() {
  const { fetchAllMeals, recipes,
    RedirectToDetailPage } = useContext(Context);
  const { pathname } = useLocation();
  const isFood = pathname.includes('food');
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState('All');

  useEffect(() => {
    if (isFood) {
      fetchAllMeals();
    } else {
      fetchAllDrinks();
    }
  }, [fetchAllMeals, isFood]);

  const fetchAreasMenu = useCallback(async () => {
    const nation = await nationList();
    setAreas([{ strArea: 'All' }, ...nation]);
  }, []);

  useEffect(() => {
    fetchAreasMenu();
  }, [fetchAreasMenu]);

  const renderCards = () => {
    let showRecipes;

    if (area !== 'All') {
      showRecipes = recipes.filter((recipe) => recipe.strArea === area);
    } else {
      showRecipes = recipes;
    }
    return showRecipes.slice(0, limitDisplayCards)
      .slice(0, limitDisplayCards)
      .map((recipe, i) => (
        <Cards
          key={ i }
          index={ i }
          { ...recipe }
          RedirectToDetailPage={ RedirectToDetailPage }
        />
      ));
  };

  return (
    <>
      <Header showSearch />
      <div>
        <RecipeListByNationDiv>
          <select
            data-testid="explore-by-nationality-dropdown"
            value={ area }
            onChange={ (e) => setArea(e.target.value) }
          >
            {
              areas.map((dropdown, i) => (
                <option
                  key={ i }
                  data-testid={ `${dropdown.strArea}-option` }
                >
                  {dropdown.strArea}
                </option>))
            }
          </select>
          {recipes.length === 1
            ? RedirectToDetailPage(recipes[0].idMeal
            || recipes[0].idDrink)
            : renderCards()}
        </RecipeListByNationDiv>
      </div>
      <Footer />
    </>
  );
}
