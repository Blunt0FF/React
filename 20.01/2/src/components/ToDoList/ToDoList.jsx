import { useContext } from "react";
import TodosContext from "../../context/ToDoContext";
import ToDoItem from "../ToDoItem/ToDoItem";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

export default function ToDoList() {
  const { todos, handleDelete, handleAddTodo, handleChange } =
    useContext(TodosContext);
  return (
    <>
      <AddTodoForm />
      <ul>
        {todos.map((item) => (
          <ToDoItem key={item.id} todo={item} />
        ))}
      </ul>
    </>
  );
}
