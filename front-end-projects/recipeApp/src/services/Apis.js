const BASE_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const BASE_MEAL_BY_ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const BASE_MEAL_INGREDIENT_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const BASE_MEAL_FIRST_LETTER_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const BASE_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const BASE_DRINK_BY_ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const BASE_DRINK_INGREDIENT_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const BASE_DRINK_FIRST_LETTER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const BASE_MEAL_FILTER_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const BASE_DRINK_FILTER_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

const BASE_MEAL_AREA = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const MEAL_RESULTS_BY_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

const DRINK_RESULTS_BY_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

// BY INGREDIENT

export async function getMealByIngredientSearch(searchTerm) {
  const res = searchTerm
    ? await fetch(`${MEAL_RESULTS_BY_INGREDIENT}${searchTerm}`)
    : await fetch(MEAL_RESULTS_BY_INGREDIENT);
  const data = await res.json();
  return data.meals;
}

export async function getDrinkByIngredientSearch(searchTerm) {
  const res = searchTerm
    ? await fetch(`${DRINK_RESULTS_BY_INGREDIENT}${searchTerm}`)
    : await fetch(DRINK_RESULTS_BY_INGREDIENT);
  const data = await res.json();
  return data.dinks;
}

export async function getDrinkByIdRecipe(drinkId) {
  const res = await fetch(`${BASE_DRINK_BY_ID_URL}${drinkId}`);
  const data = await res.json();
  return data.drinks;
}

export async function getIngredientButtons() {
  const res = await fetch(`${BASE_MEAL_INGREDIENT_URL}`);
  const data = await res.json();
  return data.meals;
}

export async function getIngredientButtonsDrinks() {
  const res = await fetch(`${BASE_DRINK_INGREDIENT_URL}`);
  const data = await res.json();
  return data.drinks;
}

// MEALS
export async function getMealRecipe(searchTerm) {
  const res = searchTerm
    ? await fetch(`${BASE_MEAL_URL}${searchTerm}`)
    : await fetch(BASE_MEAL_URL);
  const data = await res.json();
  return data.meals;
}

export async function getMealByIdRecipe(mealId) {
  const res = await fetch(`${BASE_MEAL_BY_ID_URL}${mealId}`);
  const data = await res.json();
  return data.meals;
}

export async function getMealByFirstLetterRecipe(searchTerm) {
  const res = await fetch(`${BASE_MEAL_FIRST_LETTER_URL}${searchTerm}`);
  const data = await res.json();
  return data.meals;
}

// DRINKS
export async function getDrinkRecipe(searchTerm) {
  const res = searchTerm
    ? await fetch(`${BASE_DRINK_URL}${searchTerm}`)
    : await fetch(BASE_DRINK_URL);
  const data = await res.json();
  return data.drinks;
}

export async function getDrinkByFirstLetterRecipe(searchTerm) {
  const res = await fetch(`${BASE_DRINK_FIRST_LETTER_URL}${searchTerm}`);
  const data = await res.json();
  return data.drinks;
}

// CATEGORIAS DOS BOTOES
export async function getCategories() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await res.json();
  return data.meals;
}

export async function getCategoriesDrinks() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = await res.json();
  return data.drinks;
}

// FILTRO POR CATEGORIA
export async function getFilterMealByCategoryAPI(category) {
  const res = await fetch(`${BASE_MEAL_FILTER_CATEGORIES}${category}`);
  const data = await res.json();
  return data.meals;
}

export async function getFilterDrinkByCategoryAPI(category) {
  const res = await fetch(`${BASE_DRINK_FILTER_CATEGORIES}${category}`);
  const data = await res.json();
  return data.drinks;
}

// RECEITA ALEATORIA
export async function fetchRandomFood() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await res.json();
  return data.meals;
}

export async function fetchRandomDrink() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await res.json();
  return data.drinks;
}

// FILTRO POR NACIONALIDADE
export async function nationList() {
  const res = await fetch(BASE_MEAL_AREA);
  const data = await res.json();
  return data.meals || data.drinks;
}
