import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DataProvider } from './index.jsx'
import { Home } from './home.jsx'



function App() {
 return<>
   <DataProvider>
      <Home />
   </DataProvider>
    
  
 </>
}

export default App
