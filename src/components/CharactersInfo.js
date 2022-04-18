import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharactersInfo = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res =>   setCharacter(res.data));       //console.log(res.data));  //
    }, [id])

    return (
        <div>
            <h3>Name:</h3>
            <h1><b> {character.name} </b></h1>
            <img src={character.sprites?.other.dream_world.front_default} alt="" />
            <h2><b>Order:</b> {character.order} </h2> 
            <h2><b>Height:</b> {character.height} </h2>
            <h2><b>Weight:</b> {character.weight} </h2> 
            <h2><b>Species:</b> {character.species.name} </h2> 
        </div>

    );
};

export default CharactersInfo;


{/* <h2><b>Order:</b> {character.order} </h2> 
<h2><b>Height:</b> {character.height} </h2> 
<h2><b>Weight:</b> {character.weight} </h2> 
<h2><b>Species:</b> {character.species.name} </h2>  */}

/* 
<p>Descripción: {character.descriptions}</p>
<img src={character.image} alt="" />
<p>Location: {character.location.name}</p> */