import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { UseEffect } from './App.jsx'
// import { Useeffect } from './test.jsx'
import { Fetchdata } from './fetchapi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fetchdata />
  </StrictMode>,
)
