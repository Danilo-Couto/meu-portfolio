import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import Context from './Context';
import { getDrinkByFirstLetterRecipe, getDrinkByIngredientSearch,
  getDrinkRecipe, getMealByFirstLetterRecipe,
  getMealByIngredientSearch, getCategories,
  getMealRecipe, getFilterMealByCategoryAPI, getFilterDrinkByCategoryAPI,
  getCategoriesDrinks,
} from '../services/Apis';
import { getLocalStorage } from '../services/LocalStorage';

// CONSTANTS
const SEARCH_MEALS_OPTIONS_FUNCTIONS = {
  INGR: (searchIngredient) => getMealByIngredientSearch(searchIngredient),
  NAME: (searchName) => getMealRecipe(searchName),
  FIRST: (searchLetter) => getMealByFirstLetterRecipe(searchLetter),
};

const SEARCH_DRINKS_OPTIONS_FUNCTIONS = {
  INGR: (searchIngredient) => getDrinkByIngredientSearch(searchIngredient),
  NAME: (searchName) => getDrinkRecipe(searchName),
  FIRST: (searchLetter) => getDrinkByFirstLetterRecipe(searchLetter),
};

function Provider({ children }) {
  // MAKE GLOBAL STATES
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const history = useHistory();
  const [categoriesBtn, setCategoriesBtn] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [showFavorites, setShowFavorites] = useState([]);
  const [ingredientSelected, setIngredientSelected] = useState('');

  // SAVE MEALS AND DRINKS TO STATE
  const getMeals = (data) => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    setRecipes(
      data || [],
      /* {
      allRecipes: {
        recipes: data || [],
        drinks: [],
      } ,
    } */);
  };

  /* const getDrinks = (data) => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    setRecipes({
      allRecipes: {
        meals: [],
        drinks: data || [],
      },
    });
  };
 */
  // GET MEALS OR DRINKS TROUGHT SEARCHBAR
  const fetchMealsWithOptions = async (searchInput, radioOption) => {
    setLoading(true);
    const data = await SEARCH_MEALS_OPTIONS_FUNCTIONS[radioOption](searchInput);
    setLoading(false);
    getMeals(data);
  };

  const fetchDrinksWithOptions = async (searchInput, radioOption) => {
    setLoading(true);
    const data = await SEARCH_DRINKS_OPTIONS_FUNCTIONS[radioOption](searchInput);
    setLoading(false);
    getMeals(data);
  };

  // GET MEALS OR DRINKS GENERAL
  const fetchAllMeals = async () => {
    const data = await getMealRecipe();
    getMeals(data);
  };

  const fetchAllDrinks = async () => {
    const data = await getDrinkRecipe();
    getMeals(data);
  };

  // BOTOES DE CATEGORIA
  const fetchCategoriesBTN = async () => {
    setLoading(true);
    const data = await getCategories();
    setLoading(false);
    setCategoriesBtn(data);
  };

  const fetchCategoriesBTNforDrinks = async () => {
    setLoading(true);
    const data = await getCategoriesDrinks();
    setLoading(false);
    setCategoriesBtn(data);
  };

  // BOTOES DE CATEGORIA
  const { pathname } = useLocation();
  const isFood = pathname.includes('foods');

  const renderButtonsCategory = () => {
    if (isFood) {
      fetchCategoriesBTN();
    } else {
      fetchCategoriesBTNforDrinks();
    }
  };

  // GET RECIPES BY CATEGORY
  const fetchFilterMealByCategories = async (category) => {
    const data = await getFilterMealByCategoryAPI(category);
    getMeals(data);
  };

  const fetchFilterDrinkByCategories = async (category) => {
    const data = await getFilterDrinkByCategoryAPI(category);
    getMeals(data);
  };

  // RESET RECIPELIST FILTER
  const resetFilters = () => {
    setCategorySelected('');
    setIngredientSelected('');
    if (isFood) fetchAllMeals();
  };

  // SE APENAS UMA RECEITA, VÁ DIRETO PARA ESTA PAGINA DE DETALHES
  const RedirectToDetailPage = (id) => {
    if (isFood) {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  // FAVORITOS
  const getFavoritesFromLS = useCallback(() => {
    const favoriteList = getLocalStorage('favoriteRecipes');
    if (favoriteList) {
      setShowFavorites(favoriteList);
    } else {
      setShowFavorites([]);
    }
  }, []);

  const contextValue = {
    fetchMealsWithOptions,
    fetchDrinksWithOptions,
    loading,
    recipes,
    fetchAllMeals,
    fetchAllDrinks,
    fetchCategoriesBTN,
    fetchCategoriesBTNforDrinks,
    categoriesBtn,
    setCategorySelected,
    categorySelected,
    fetchFilterMealByCategories,
    fetchFilterDrinkByCategories,
    resetFilters,
    renderButtonsCategory,
    getFavoritesFromLS,
    setShowFavorites,
    showFavorites,
    RedirectToDetailPage,
    ingredientSelected,
    setIngredientSelected,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;
