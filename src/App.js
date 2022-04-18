import './App.css';
import {
        HashRouter, 
        Routes, 
        Route
        } from 'react-router-dom';
import Login from './components/Login' 
import Characters from './components/Characters'  
import CharacterCard from './components/CharacterCard'        
import CharactersInfo from './components/CharactersInfo'        
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
  <HashRouter>
    <div className="App">
      Hallo Welt!
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route element={<ProtectedRoutes/>} >
          
              <Route path="/pokemons" element={<Characters/>} />
              <Route path="/pokemoncard" element={<CharacterCard/>} />
              <Route path="/pokemonmoreinfo/:id" element={<CharactersInfo/>} />
          
          </Route>
      </Routes>
    </div>
  </HashRouter>  
  );
}

export default App;