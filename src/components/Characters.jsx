import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import '../style/Characters.css'
import Character from './Character'
import Search from './Search'
import useCharacters from '../hooks/useCharacters'
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
    
    const characters = useCharacters("https://rickandmortyapi.com/api/character")
    const [ favorites, dispatch ] = useReducer(favoriteReducer,initialState)
    const [search, setSearch] = useState('')
    const searchInput = useRef(null)
    // const handleSearch = ()=>{
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value);
    },[])
   

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

        {/* <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch}/>
        </div> */}
        <Search search= {search} searchInput={searchInput} handleSearch={handleSearch}  />
       
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