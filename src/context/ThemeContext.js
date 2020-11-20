import React from 'react'

const ThemeContext = React.createContext({
    theme: 'bg__dark',
    title: 'red',
    setTheme : ()=>{}

});


export default ThemeContext;