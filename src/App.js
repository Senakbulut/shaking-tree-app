import './App.css';
import Basket from './components/Basket/Basket';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
     
  
      <Basket/>
     
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));