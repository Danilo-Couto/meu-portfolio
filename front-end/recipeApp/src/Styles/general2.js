import styled from 'styled-components';

export const ButtonCards = styled.button`
`;

// not Found Page
export const NotFoundCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1em; 
  background: #ff6347;
`;

// search
export const SearchCss = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
  max-width: 100%;
  margin: 0.1em;
}
button {
  background: #333333;
}
`;

// profile
export const ProfileCSS = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  padding: 0.5em;
  button {

  }
`;

// doneRecipes
export const DoneRecipesNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width:100%; 
  width: 100%;
  margin: 0.5em;
`;

export const RecipeDoneMap = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 100%;
  text-align: center;
  position: relative; 
`;

export const ImgCard = styled.div`
position: relative;
width: 100%;

.icons{
  display: flex;
  position: absolute;
  gap: 0.2em;
  top: 0;
  right: 0;
  max-width: 100%;
  button {
    background-color: white;
    opacity: 100%;
  }
}
`;

export const ANameCategory = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: baseline; 
a, h3 {
  width: 100%;
  height: 1px;
  padding: 1em;
}
`;

// inProgress Recipes
export const AroundInProgressCss = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 100%;
  margin: 0.25rem;
  padding: 0.5rem;
button:disabled{ 
  background-color: #cccccc;
}
`;

export const ImgCardInProgress = styled.div`
position: relative;
width: 100%;
.icons{
  display: flex;
  position: absolute;
  gap: 0.2em;
  top: 0;
  right: 0;
  max-width: 100%;
  button {
    background-color: white;
    opacity: 100%;
  }
}
}
`;

// favorite Recipes
export const FavoritesNav = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  margin: 0.25rem;
  padding: 0.5rem;
`;

export const FavoriteMap = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 100%;
  font: 1em/normal "Renner",sans-serif;
  text-align: center;
  position: relative; 
`;

export const ImgCardFavorite = styled.div`
position: relative;
width: 100%;
.icons{
  display: flex;
  position: absolute;
  gap: 0.2em;
  top: 0;
  right: 0;
  max-width: 100%;
  button {
    background-color: white;
    opacity: 100%;
  }
}
`;

export const ANameCategoryFav = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: baseline; 
a, h3 {
  width: 100%;
  height: 1px;
  padding: 1rem;
}
`;
