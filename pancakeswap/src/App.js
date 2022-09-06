import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Component } from './omponents';
import { StyledButton } from './components/Button';

function App() {
  return (
    <Routes>
      <Route path="" element = {<StyledButton primary>Ciao</StyledButton>}/>


    </Routes>
    
  );
}

export default App;
