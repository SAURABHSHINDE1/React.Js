import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './home'
import { DataProvider } from './contextProvider'

function App() {
    return<DataProvider>

      <Home />

    </DataProvider>
}

export default App
