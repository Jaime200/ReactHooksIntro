import React, { useState, useEffect, useReducer } from 'react'
import '../style/Characters.css'
import Character from './Character'

const initialState = {
    favorites : []
}

const favoriteReducer = (state, action) =>{
    
    switch(action.type){
        case  'ADD_TO_FAVORITE': 
            return {
                ...state ,
                favorites : [...state.favorites, action.payload]
            }
        default : return state;
        
    }
}

const Characters = ()=>{
    
    const [characters, setCharacters ] = useState([])
    const [ favorites, dispatch ] = useReducer(favoriteReducer,initialState)
    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
    }

    const handleClick = favorite =>{
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    useEffect(   ()=>{
      
        fetchData();
    }, [] ); //Pasamos un arreglo vacio cuano no se tiene 
             //una variable [escuchando de un cambio]
             console.log(favorites)
    return (
        <>
        <h1>Lista</h1>
        <ul>
        { 
        favorites.favorites.map(favorite=>{
           
            return <li  key={favorite.id}>{favorite.name}</li>
            
        })
        }
        </ul>
       
        <div className="Characters">
            {
            characters.map((character) => (
            <Character key={character.id} {...character} handleClick = {handleClick} />
             ))
            }
        </div>
        </>
       
    );
}

export default Characters;