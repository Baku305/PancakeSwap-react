import './App.scss';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Button } from './components/Button';
import { color } from './components/Color'
import { MoonSection } from './components/the-moon-section';

function App() {
  const Navigate = useNavigate(); 

  

  return (
    <>
    <MoonSection/>

      <Routes>
        <Route path='/' element={<Button color="violetBrand" onClick={()=>Navigate("/2")} buttonStyle={"btn--default"}>ciao</Button>} />
        <Route path = "/1" element = {<Button buttonStyle={"btn--default"}/>}/>
        <Route path="/2" element= {<Button  buttonSize={"btn--full"} type="button" as={Link} to="/">Esempio</Button>}/>
      </Routes>
    </>
  );
}

export default App;



