export default function EventBubbling() {
    const handleClickDiv = () => console.log('DIV');
    const handleClickButton = () => console.log('BUTTON')
  
    return (
      <div onClick={handleClickDiv} style={{ backgroundColor: 'lightblue', height: '300px', width: '300px' }}>
        <button onClick={handleClickButton}>Click</button>
      </div>
    )
  }