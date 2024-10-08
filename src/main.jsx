import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import "./index.css"

const root1 = createRoot(document.getElementById('root'))

root1.render(
  <App />
)
