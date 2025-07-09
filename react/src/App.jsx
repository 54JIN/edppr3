import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChartDisplay from './components/ChartDisplay'  

function App() {
  const handleSubmit = (e) => {

  }

  return (
    <div> 
    <h1>Empire or Resistance?</h1>
    <ChartDisplay />
    </div>
  )
}

export default App
