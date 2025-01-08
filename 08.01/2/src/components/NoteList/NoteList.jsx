//rendering list of notes
// notes can be added and removed
import { useState } from "react";
import Note from "../Note/Note";
import styles from "./NoteList.module.css";
import NoteForm from "../NoteForm/NoteForm";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    const newNote = {
        id: Date.now(),
        text: noteText
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const removeNote = (noteId) => setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));

  return (
    <>
      <NoteForm addNote={addNote} />
      {notes?.length ? 
      <ul className={styles.noteList}>
        {notes.map((note) => (
          <Note key={note.id} text={note.text} noteId={note.id} removeNote={removeNote}/>
        ))}
      </ul> : <h1>Add smth to the list</h1>}
    </>
  );
}
