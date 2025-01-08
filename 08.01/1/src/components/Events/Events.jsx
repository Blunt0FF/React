export default function Events() {
    const handleClick = () => console.log('Clicked');
    const handleDoubleClick = () => console.log('Double clicked');
    // const handleMouseDown = () => console.log('Mouse down')
    const handleMouseUp = () => console.log('Mouse up')
    const handleMouseOver = () => console.log('Mouse over')
    const handleMouseOut = () => console.log('Mouse out')
    const handleMouseMove = () => console.log('Mouse move')
  
    // const aKeyHandler = (event) => {
    //   if (event.key === 'Enter') {
  
    //   }
    // }
  
    return (
      <>
        <h1 onClick={handleClick}>Click</h1>
        <h1 onDoubleClick={handleDoubleClick}>Double click</h1>
        <h1 onMouseDown={() => console.log('Mouse down')} onMouseUp={handleMouseUp}>On mouse up/down</h1>
        <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover</h1>
        <h1 onMouseMove={handleMouseMove}>Mouse move</h1>
      </>
    );
  }