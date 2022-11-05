import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CountryList from './components/CountryList'
import GlobalStyle from './GlobalStlye'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyle />
      <main>
        <CountryList />
      </main>
    </div>
  )
}

export default App
