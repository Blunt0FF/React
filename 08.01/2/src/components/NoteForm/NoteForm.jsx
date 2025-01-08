import styles from './NoteForm.module.css'
import { useState } from 'react'

export default function NoteForm( {addNote} ) {
    const [noteText, setNoteText] = useState('')

    const handleChange = (e) => {
        setNoteText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(noteText);
        setNoteText('');
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" onChange={handleChange} value={noteText}/>
            <button className={styles.button} type="submit" disabled={!noteText.length}>Add</button>
        </form>
    )
}