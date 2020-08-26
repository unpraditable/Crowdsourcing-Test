import React from 'react';
import Users from './features/Users/Users';
import SearchBar from './features/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
        <SearchBar />
        <Users />
    </div>
  );
}

export default App;
