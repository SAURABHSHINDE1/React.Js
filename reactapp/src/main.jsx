import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { Propagation } from './propagation.jsx'
// import Events from './events.jsx'
// import { UserData } from './components/hooks/useState.jsx'
// import Data from './components/hooks/useState.jsx'
// import { UserData } from './test.jsx'
import { ToggleSwitch } from './project/toggleSwitch.jsx'
// import Image from '../src/file.jsx'
// import { App } from './test'
import UsateState from './usestate/usestate'
// import { ToggleSwitch } from './project/toggleSwitch'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    

  < ToggleSwitch  />

  </StrictMode>
)
