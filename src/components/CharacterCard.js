import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({characterUrl}) => {
    //console.log(characterUrl) // 10228 : personajes
    const [character, setCharacter ] = useState({});

    useEffect(() => {
        axios.get(characterUrl)
            .then(res =>    setCharacter(res.data));  // console.log(res.data)); //
    }, [ characterUrl ])


    // key={character.id}
    return (
        <li className="pokemon-card">  
                                       
              <Link to={`/pokemonmoreinfo/${character.id}`} className="pokemon-card">  
                                 <h3> {character.name} </h3>
                    
                    <img src={character.sprites?.front_shiny} alt="" /> 
                     
                    <img src={character.sprites?.other.home.front_default} alt="" /> 
                    
                    
                    <p>Height: {character.height}</p>
                    <p>Weight: {character.weight}</p>  
                    <p>Base Experience: {character.base_experience}</p>              
              </Link>  
        </li>    
    );
};

export default CharacterCard;