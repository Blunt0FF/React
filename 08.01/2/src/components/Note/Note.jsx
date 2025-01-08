import { useState } from 'react'
import styles from './Note.module.css'

export default function Note({ text, removeNote, noteId }) {
    const [status, setStatus] = useState('not ready')

    const handleChange = () => {
        setStatus(prevStatus => prevStatus === 'not ready' ? 'ready' : 'not ready')
    }

    return (
        <li className={styles.note}>
            <p className={status === 'ready' ? styles.pDone : styles.p}>{status === 'ready' ? 'Ready' : text}</p>
            <input className={styles.check} type="checkbox" onChange={handleChange}/>
            <button onClick={() => removeNote(noteId)}>Remove note</button>
        </li>
    )
}