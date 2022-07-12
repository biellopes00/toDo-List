import { useState } from 'react'
import { CreatedTask } from './components/CreatedTask'
import { Header } from './components/Header'
import { Task } from './components/Task'
import './global.css'

function App() {

  return (
    <div className="App">
     <Header />
     <Task />
     <CreatedTask />
    </div>
  )
}

export default App
