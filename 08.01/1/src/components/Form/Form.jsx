export default function Form() {
    const handleChange = (event) => {
      console.log('Event', event);
      console.log(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Форма отправлена')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Отправить</button>
      </form>
    )
  }