
import { useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import './ListItems.css'
import { useContext } from 'react'
import { useEffect } from 'react'

const ListItems =() => {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')
    const {translations} = useContext(LanguageContext)

    const addItem = () => {
        if (inputValue) {
            setItems(prevItems => [... prevItems, inputValue])
            setInputValue('')
        }
    }
    useEffect(()=> {
    console.log('Компонент ListItems смонтирован');
    }, [//item
        ]
    )

    return <div className="list-container">
        <h2>{translations.title}</h2>
        <div className="input-group">
            <input type="text"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            placeholder={translations.placeholder} />
            <button onClick={addItem}>{translations.addButton}</button>
        </div>
        <ul>
            {items.map((item)=> (
                <li key={item}>{item}</li>
            ))}
        </ul>

    </div>
}

export default ListItems