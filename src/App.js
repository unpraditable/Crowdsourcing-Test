import React from 'react';
import Users from './features/Users/Users';
import SearchBar from './features/SearchBar/SearchBar';
import './App.scss';

function App() {
  return (
    <div className="App">
        <div class="col-12">
          <SearchBar />
        </div>
        <div class="col-12">
          <Users />
        </div>
    </div>
  );
}

export default App;
