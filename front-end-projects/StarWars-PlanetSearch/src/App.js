import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './hooks/Provider';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <Provider>
        <Filters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
