import React from 'react';
import './App.css';
import Main from "./pages/Main";
import RandomQuote from "./pages/RandomQuote";
import AddNewQuote from "./pages/AddNewQuote";

function App() {
  return (
      <div className="App">
            <Main/>
             <RandomQuote/>
            <AddNewQuote/>
      </div>
  );
}

export default App;
