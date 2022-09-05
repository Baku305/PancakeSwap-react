import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Component } from './omponents';

function App() {
  return (
    <Routes>
      <Route path="" element = {<Component/>}/>
    </Routes>
    
  );
}

export default App;
