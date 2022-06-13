function setLocalStorage(key, item) {
  const convertedItem = JSON.stringify(item);
  localStorage.setItem(key, convertedItem);
}

export function getLocalStorage(key) {
  const convertedItem = JSON.parse(localStorage.getItem(key));
  return convertedItem;
}

// FAVORITA
export function addFavoriteToLocalStorage(recipe) {
  const favoriteList = localStorage.getItem('favoriteRecipes')
    ? getLocalStorage('favoriteRecipes')
    : [];
  if (!favoriteList.length) {
    setLocalStorage('favoriteRecipes', [recipe]);
  } else {
    setLocalStorage('favoriteRecipes', [...favoriteList, recipe]);
  }
}

export function removeFavoriteToLocalStorage(recipe) {
  const favoriteList = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const removeFavorite = favoriteList.filter((fav) => fav.id !== recipe.id);
  setLocalStorage('favoriteRecipes', removeFavorite);
}

// RECEITAS EM PROGRESSO
export function recipeInProgress() {
  return localStorage.getItem('inProgressList')
    ? getLocalStorage('inProgressList')
    : [];
}

export function toggleInProgressRecipesFromLocal(inProgressList) {
  setLocalStorage('inProgressRecipes', inProgressList);
}

// RECEITAS FEITAS
export function addDoneRecipesOnLocal(newDoneRecipe) {
  const doneList = localStorage.getItem('doneRecipes')
    ? getLocalStorage('doneRecipes')
    : [];
  if (!doneList.length) {
    setLocalStorage('doneRecipes', [newDoneRecipe]);
  } else {
    setLocalStorage('doneRecipes', [...doneList, newDoneRecipe]);
  }
}
