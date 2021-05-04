import React, { useState } from 'react'
import { Task } from './components/Types'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

const initialState: Task[] = [
  {
    id: 2,
    title: '次にやる',
    done: false
  },{
    id: 1,
    title: '最初にやる',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )

}

export default App