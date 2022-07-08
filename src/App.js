import './App.css';
import { useState } from 'react';
import { Header } from './components/header';
import { Body } from './components/body';
import ThemeContext, { themes } from './themes/themes';

function App() {
  // to change theme
  const [Theme, setTheme] = useState(themes.light)
 
  return (
    <div className='App' style={Theme}>
      {/* to provide theme value the other components */}
      <ThemeContext.Provider value={Theme}>
        <Header/>
        <Body 
        setTheme={setTheme}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
