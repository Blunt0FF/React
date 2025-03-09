import { useState } from 'react'
import './App.css'
import {AppBar, Box, Button, Checkbox, Container, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography} from '@mui/material'

function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  function addTask() {
    if(task.trim()){
      const newTask = {id: Date.now(), text: task, completed: false}
      setTaskList(prevList => [...prevList, newTask]) 
      setTask('')
    }
  }
  //при вызове метода .trim() убираются все пробелы по краям

  function doneTask(id){
    // id = 1
    // taskList = [{ id: 1, text: Task1, completed: false }, { id: 2, text: Task2, completed: false }]
    // .map creates []
    // task = { id: 1, text: Task1, completed: false }
    // task.id === id => true
    // create empty obj = {}
    // obj = { id: 1, text: Task1, completed: false }
    // obj.completed = !task.completed (true)
    // obj = { id: 1, text: Task1, completed: true }
    // new from .map [{ id: 1, text: Task1, completed: true }, { id: 2, text: Task2, completed: false }]
    // newObj = { name: 'Alice', age: 20, name: 'Lisa' } => newObj.name = 'Lisa'
    const newTaskList = taskList.map(task => task.id === id ? {...task, completed: !task.completed} : task)
    setTaskList(newTaskList)
  }

  //
  // const newTaskList = []
  // for (let i=0; i < taskList.length; i++) {
  //   const task = taskList[i];
  //   
  //    if (task.id === id) {
  //      newTaskList.push(task)
  //    }
  //
  // }
  function deleteTask(id){
    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)
  }
  // doneTask(id) // превратится в то, что в return (в нашем случае undefined). onClick попытается вызвать функцию undefined. Так как undefined - не функция, код упадет
  // () => doneTask(id) // это всегда функция. onClick попытается вызвать функцию () => doneTask(id) и выполнит doneTask(id)
  // // onClick={undefined}
  // // onClick={() => doneTask(id)}
  return (
    <div>
      <AppBar position='static'>
      <Toolbar>
          <Typography variant='h6'>To-Do List</Typography> 
          {/* это параграф */}
        </Toolbar>
      </AppBar>
      <Container>
        <Box>
          <Paper elevation={3} style={{padding: 16}}>
          <Typography variant='h5'>Create task</Typography>
          <Box>
            <TextField variant='outlined' fullWidth placeholder='New task' value={task} onChange={(e) => setTask(e.target.value)}/>
            <Button variant='contained' color='primary' fullWidth onClick={addTask}>Add task</Button>
          </Box>
          </Paper>
        </Box>
        <List>
          {taskList.map(task => (<ListItem key={task.id}>
            <Checkbox checked={task.completed} onChange={() => doneTask(task.id)} edge='start' disableRipple/>
            <ListItemText>{task.text}</ListItemText>
            <Button variant='contained' color='primary' onClick={() => deleteTask(task.id)}>Deleted task</Button>
            </ListItem>))}
        </List>
      </Container>
    </div>
  )
}

export default App
