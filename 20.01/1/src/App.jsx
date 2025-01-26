import ThemeContext from './context/ThemeContext';
import './App.css';
import { useState } from 'react';
import ThemedButton from './components/ThemedButton';
import ThemeSwitcher from './components/ThemeSwitcher';
import CounterProvider from './components/CounterProvider';
import Buttons from './components/Buttons';
import DataProvider from './components/DataProvider';
import Data from './components/Data';

function App() {
  const [appTheme, setAppTheme] = useState('light');

  // const value = 'myValue'

  // const obj = {
  //   value // => value: value
  // }

  return (
    <>
      <ThemeContext.Provider value={{ theme: appTheme, setTheme: setAppTheme }}>
        {/* <ThemedButton /> */}
        <ThemeSwitcher />
      </ThemeContext.Provider>
      <CounterProvider>
        <Buttons />
      </CounterProvider>
      <DataProvider>
        <Data />
      </DataProvider>
    </>
  );
}

export default App;
