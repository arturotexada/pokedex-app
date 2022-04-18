import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard'

const Characters = () => {
    const userName = useSelector(state => state.userName); 
    const navigate = useNavigate();

    const [ characters, setCharacters ] = useState([]);
    const [ locations, setLocations ] = useState([]);
    const [ pokemonName, setPokemonName ] = useState("");
    
    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
        .then(res => setCharacters(res.data.results));       
    
    
        axios
        .get('https://pokeapi.co/api/v2/location')
        .then(res => console.log(res.data.results)) //setLocations(res.data.results))
    }, []);

    const submit = e => {
        e.preventDefault();
        navigate(`/pokemons/${pokemonName}`)
    };
    
     const handleLocation = e => {
        // e.target.value es la url de la location
        //console.log(e.target.value)
        axios
            .get(e.target.value)
            .then(res =>  setCharacters(res.data.results)); // console.log(res.data.areas))  //
      }; 

    console.log(characters);

    return (
        <div>
            <h1>Characters</h1>
            <p className="Welcome-message">Welcome {userName}</p>
           
           <div className= "select">
               <select onChange={handleLocation}>
                   <option value="">Select a Location to make a Search. Default location selected</option>
                  {/*  <option value="">Option 2</option> */}
                   {
                       locations.map(location => (
                        <option key={location.url} value={location.url}>
                            {location.name.url}
                        </option>
                                                 ) 
                                    )
                   }
               </select>
           </div>

            <form className="input-container"  onSubmit={submit} >
                <label htmlFor="pokemon-name" >Search by Name</label>
                <input
                    type="text"
                    id="pokemon-name"
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                />
                <button>Buscar</button>
            </form>
            <ul className="pokemon-list"> 
            {
                    characters.map(character => (
                        <CharacterCard 
                        characterUrl={character.url ? character.url : character}
                        key={character.url ? character.url : character}
                        
                        />
                        //<li key={character.id}>
                            //<Link to={`/characters/${character.id}`}>
                            //    {character.name}
                            //</Link>
                        //</li>            
                    ))       
            } 
            </ul>  
            
        </div>
    );
};
 
export default Characters;