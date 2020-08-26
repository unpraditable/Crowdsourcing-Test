import React from 'react';
import Intro from './features/Intro/Intro';
import Users from './features/Users/Users';
import SearchBar from './features/SearchBar/SearchBar';
import AddButton from './features/AddButton/AddButton';

import './App.scss';

function App() {
  return (
    <div className="App">
        <Intro />
        <div class="col-12">
          <Users />
        </div>
        <div class="col-12">
          <AddButton />
        </div>
    </div>
  );
}

export default App;
