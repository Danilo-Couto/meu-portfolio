import styled from 'styled-components';

export const LoginCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1em; 
  background: #ff6347;
  padding: 1rem;
button:disabled{ 
  background-color: #cccccc;
}
`;

export const HeaderCss = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font: bold 0.8125rem/normal;
  background: #ff6347;
  width: 100%;
button {
  background-color: white;
}
h2{
  text-align: center;
}
`;

export const FooterCss = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
button {
  background-color: white;
}
`;

// meu Foods and Drinks
export const DivCategory = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

// explore menu
export const ExploreMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  
`;

// recipe List
export const ContainerAroundRecipeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  `;

export const RecipeListDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  
button {
  background-color: white;
}
`;

// list by nationality
export const RecipeListByNationDiv = styled.div`
  display: flex;
  flex-direction: column;
select {
    margin: 0.25rem;
}
button {
  background-color: white;
}
h3{
  color: black;
}
`;

// recipe by Ingredient
export const IngredientDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.25rem;
button {
  background: white;
  border: none;
  width: 15%;
}
h3 {
  color: black;
  font-size: small;
}
`;

// detail Page
export const DetailPageCss = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;  position: relative; 
  iframe{
    width: 100%;
  }
.recommendationCard {
  display: flex;
  h4{
    display: none; 
  }
}
`;

export const ImgCardDetail = styled.div`
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
    opacity: 90%;
  }
}
`;
export const NameCategoryDetail = styled.div`
  width: 100%;
  max-width: 100%;
  gap: 1em;
  display: flex;
  align-items: baseline; 
`;
