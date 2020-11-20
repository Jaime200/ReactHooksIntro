import React from 'react'
import '../style/Character.css'

const Character = ({ name, image, species , id })=>{

    return(
        <div className="Character" >
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{species}</p> 
        </div>
    )
}


export default Character;