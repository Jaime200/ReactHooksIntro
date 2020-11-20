import  {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Character from './components/Characters'
import ThemeContext from './context/ThemeContext'

function App() {    
  const [ theme, setTheme] = useState("bg__dark");
  const value = { theme, title:'red', setTheme };

  return (
    <ThemeContext.Provider value= {value}>
    <div className={`App ${theme}`}>
        <Header />
        <Character />
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
