import React, { useState } from 'react'
import './ListStyle.css'

export default function List() {

    const [people, setPeople] = useState([
        { id: 1, name: 'Иван', age: 20 },
        { id: 2, name: 'Мария', age: 22 },
        { id: 3, name: 'Алексей', age: 21 },
        { id: 4, name: 'Марина', age: 19 },
        { id: 5, name: 'Даша', age: 23 },
        { id: 6, name: 'Глеб', age: 24 },
        { id: 7, name: 'Дима', age: 18 },
        { id: 8, name: 'Гриша', age: 20 },
        { id: 9, name: 'Серафим', age: 21 },
      ]);

    const handleRemove = (id) => {
        const updatedPeople = people.filter((person) => person.id !== id);
        setPeople(updatedPeople);
    };


    return (
        <div>
          <h2>Список приглашенных</h2>
          <ul className='ulStyle'>
            {people.map((person) => (
              <li key={person.id} >
                <span>
                  {person.name}, {person.age} лет
                </span>
                <button  onClick={() => handleRemove(person.id)}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        </div>
    )
}
