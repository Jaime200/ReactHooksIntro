import React, { useContext } from 'react'
import '../style/Header.css'
import ThemeContext from '../context/ThemeContext'
const Header=() =>{
    // const [darkMode, setDarkMode] = useState(false);
    
    const { title:color,theme, setTheme } = useContext(ThemeContext)
    // const handleClick = ()=>{
    //     setDarkMode(!darkMode);
    // }
 return (
    <div className="Header">
        <h1 style= {{color}} >Esto es react hooks</h1>
        <button type="button"
        onClick ={ ()=> {
            console.log('click');
            setTheme(theme =='bg__dark'?  'bg__light': 'bg__dark' )
            }} >
        {theme}
        {color}
        </button>
    </div>
 );
}

export default Header;

