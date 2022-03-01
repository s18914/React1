import Header from './components/Header'
import Tasks from './components/Tasks'
import React from 'react'
import { useState } from 'react'


const App = () => {

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
    console.log('delete', id)
  }

  return (
    <div className='App'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;
