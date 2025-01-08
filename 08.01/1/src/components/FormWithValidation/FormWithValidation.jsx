import { useState } from 'react';

export default function FormWithValidation() {
  const [login, setLogin] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleLoginChange = e => {
    const newValue = e.target.value;
    setLogin(newValue);

    if (newValue.length < 6) {
      setIsValid(false);
      setMessage('Длина логина должна быть не менее 6 символов');
    } else {
      setIsValid(true);
      setMessage('Все хорошо!');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTitle(login);
  }

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={login}
          onChange={handleLoginChange}
          type="text"
          style={{ borderColor: isValid ? 'green' : 'red' }}
        />
        <span style={{ color: isValid ? 'green' : 'red' }}>
          {message}
        </span>
        <button disabled={!isValid}>Отправить</button>
      </form>
    </>
  );
}