import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { ExploreMenu } from '../Styles/general';

export default function Explore() {
  const history = useHistory();

  return (
    <>
      <Header showSearch={ false } />
      <ExploreMenu>
        <button
          name="foods"
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          name="drinks"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </ExploreMenu>
      <Footer />
    </>);
}
