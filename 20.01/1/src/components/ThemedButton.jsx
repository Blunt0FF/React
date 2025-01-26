import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button className={theme === 'dark' ? 'dark': 'light'}>Press me</button>
      )}
    </ThemeContext.Consumer>
  )
}

function ThemedButtonWithContext() {
  const { theme } = useContext(ThemeContext);

  return <button className={theme === 'dark' ? 'dark' : 'light'}>Press me</button>;
}