import { useState } from "react";


export default function Task( { task, updateTask, deleteTask }) {
    const [ isEdit, setIsEdit ] = useState(false);
    const [ editedTask, setEditedTask ] = useState(task.text) // "Task"

    function modifyTask() {
        setIsEdit(true);
    }

    function handleChange(e) {
        setEditedTask(e.target.value) // editedTask = "Task1"
    }

    function handleSave() {
        updateTask(task.id, editedTask);
        setIsEdit(false);
    }

    function handleCancel() {
      setIsEdit(false)
    }

  return (
    <li>
      {
        isEdit ? 
        <form onSubmit={handleSave}>
            <input onChange={handleChange} value={editedTask}/>
            <button>Save</button>
            <button onClick={handleCancel} type="button">Cancel</button>
        </form> 
        :
        <div>
            <p>{task.text}</p>
            <button onClick={modifyTask}>Modify</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
        }
    </li>
  );
}
