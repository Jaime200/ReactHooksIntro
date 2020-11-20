import React, {useContext} from 'react'
import '../style/Character.css'
import ThemeContext from "../context/ThemeContext"
const Character = ({ name, image, species })=>{
  const {theme} = useContext(ThemeContext);
    return(
        <div className={`Character Character__${theme}`} >
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{species}</p> 
        </div>
    )
}


export default Character;