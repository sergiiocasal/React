import { useEffect } from 'react'
import './App.css'


function App() {

  fetch('http://10.100.1.140:8000/saludo')
    .then(response => response.json())
    .then(data => console.log(data))
}

export default App
