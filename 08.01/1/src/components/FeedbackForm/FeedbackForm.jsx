import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('John');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleNameChange} value={name} />
      <button type="submit">Отправить</button>
    </form>
  )
}