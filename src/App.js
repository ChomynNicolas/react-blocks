import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import Nav from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      
    </div>
  );
}

export default App;
