import { useEffect, useState } from 'react';

export default function ColorChange() {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('white');

  // useState: стейт поменялся -> сделай ререндер (перерисовку)
  // useEffect: зависимость поменялась -> сделай функцию, которую я для тебя написал

  useEffect(() => {
    if (text.length < 5) {
      console.log('LIGHTBLUE');
      setBgColor('lightblue')
    } else if (text.length < 10) {
      console.log('LIGHTGREEN');
      setBgColor('lightgreen')
    } else {
      console.log('SALMON');
      setBgColor('salmon')
    }
  }, [text])

  return (
    <div>
      <h2>Color Change</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)} style={{ backgroundColor: bgColor, color: 'red' }}/>
    </div>
  )
}