import React, {useContext} from 'react'
import '../style/Character.css'
import ThemeContext from "../context/ThemeContext"
const Character = ({ name, image, species, handleClick, id })=>{
  const {theme} = useContext(ThemeContext);
    return(
        <div className={`Character Character__${theme}`} >
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{species}</p> 
          <button type="button" onClick= {()=>{handleClick({ name, image, species, id })}}>
            Add
          </button>
        </div>
    )
}


export default Character;