import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React from 'react'
import { useState } from 'react'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Learning React',
        day: '01.03.2022',
        reminder: true,
    },
    {
      id:2,
      text: 'Buy books for school',
      day: '01.03.2022',
      reminder: true,
    },
    {
        id:3,
        text: 'Workout',
        day: '02.03.2022',
        reminder: true,
    },
    {
        id:4,
        text: 'Learning React',
        day: '05.03.2022',
        reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Add task
  const addTask = async (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? 
    { ...task, reminder: !task.reminder } : task)
    )
  }

  return (
    <div className='App'>
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
       ) : ('All tasks are done!') }
    </div>
  )
}

export default App;
