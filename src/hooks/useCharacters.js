import { useState, useEffect } from 'react'


const useCharacters = url => {
    const [characters, setCharacters] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
    }

    useEffect( ()=>{
        fetchData()
    },[url] );

    return characters;
}

export default useCharacters;