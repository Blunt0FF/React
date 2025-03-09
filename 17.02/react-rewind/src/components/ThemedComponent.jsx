import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={{ background: theme === 'Light' ? '#fff' : "#333", color: theme === 'Light' ? '#000' : '#fff' }}>
      <h2>{theme} Theme</h2>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}