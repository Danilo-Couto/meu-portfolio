import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton(...props) {
  const [{ recipe, testid }] = props;
  const [recipeList, setRecipeList] = useState([]);

  const objTransformer = (obj) => {
    const newObj = {
      id: obj.idMeal || obj.idDrink || obj.id,
      type: obj.idMeal || obj.type === 'food' ? 'food' : 'drink',
    };
    setRecipeList(newObj);
  };

  useEffect(() => {
    objTransformer(recipe);
  }, [recipe]);

  const clipBoard = () => {
    objTransformer(recipe);
    const url = `http://localhost:3000/${recipeList.type}s/${recipeList.id}`;

    const el = document.createElement('input');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert(`Link copied:${url}`);
  };

  return (
    <button data-testid={ testid } type="button" onClick={ clipBoard }>
      <img
        src={ shareIcon }
        alt="shareIcon"
      />
    </button>
  );
}
