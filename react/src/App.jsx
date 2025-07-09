import { useState } from 'react'
import './App.css'
import ChartDisplay from './components/ChartDisplay'  

function App() {
  const [formData, setFormData] = useState({ homeworld: "", unit_type: "" })
  const [predicition, setPredicition] = useState("")

  const handleSubmit = () => {
    const url = "http://localhost:5000/api/predict"
    console.log(url)
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        homeworld: formData.homeworld,
        unit_type: formData.unit_type
      }
    })
    .then(res => res.json())
    .then(data => setPredicition(data))
    .catch((error) => console.error('Error:', error))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div>
      <div>
        <label htmlFor="homeworld">Homeworld</label>
        <input type="text" id="homeworld" name="homeworld" onChange={handleChange} />
        <label htmlFor="unit_type">Unit Type</label>
        <input type="text" id="unit_type" name="unit_type" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h2>Predicition: {predicition}</h2>
      </div>
      <div>
        <ChartDisplay />
      </div>
    </div>
  )
}

export default App
