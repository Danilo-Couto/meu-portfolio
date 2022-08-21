import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Detail from './Pages/Detail';
import FoodsAndDrinks from './Pages/FoodsAndDrinks';
import Explore from './Pages/Explore';
import InProgress from './Pages/InProgress';
import DoneRecipes from './Pages/DoneRecipes';
import ExploreFoodsOrDrinks from './Pages/ExploreFoodsOrDrinks';
import ExploreByIngredient from './Pages/ExploreByIngredient';
import ExploreByNationality from './Pages/ExploreByNationalities';
import NotFound from './Pages/NotFound';
import FavoriteRecipes from './Pages/FavoritedRecipes';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/foods/:id" component={ Detail } />
        <Route exact path="/drinks/:id" component={ Detail } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/foods" component={ FoodsAndDrinks } />
        <Route exact path="/drinks" component={ FoodsAndDrinks } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods/:id/in-progress" component={ InProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ InProgress } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreByNationality }
        />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreByIngredient }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreByIngredient }
        />
        <Route
          exact
          path="/explore/foods"
          component={ ExploreFoodsOrDrinks }
        />
        <Route
          exact
          path="/explore/drinks"
          component={ ExploreFoodsOrDrinks }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
