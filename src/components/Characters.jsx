import React, { useState, useEffect } from 'react'
import '../style/Characters.css'
import Character from './Character'
const Characters = ()=>{
    
    const [characters, setCharacters ] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data);
        setCharacters(data.results);
    }

    useEffect(   ()=>{
        fetchData();
    }, [] ); //Pasamos un arreglo vacio cuano no se tiene 
             //una variable [escuchando de un cambio]
    return (
        <div className="Characters">
            {
            characters.map((character) => (
            <Character key={character.id} {...character} />
        ))}
        </div>
    );
}

export default Characters;