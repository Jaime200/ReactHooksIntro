import React, { useState, useEffect, useReducer, useMemo, useRef } from 'react'
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
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)
    const handleSearch = ()=>{
        setSearch(searchInput.current.value);
    }

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

    // const filterCharacters = characters.filter(character =>{
    //     return character.name.toLowerCase().includes(search.toLowerCase())
    // })

    const filterCharacters = useMemo( ()=>
    characters.filter( character =>{
        return character.name.toLowerCase().includes(search.toLowerCase());
    })
    ,[characters,search])

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

        <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch}/>
        </div>
       
        <div className="Characters">
            {
            filterCharacters.map((character) => (
            <Character key={character.id} {...character} handleClick = {handleClick} />
             ))
            }
        </div>
        </>
       
    );
}

export default Characters;