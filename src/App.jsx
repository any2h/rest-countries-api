import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { variables, darkMode, lightMode } from './themes'
import GlobalStyle from './GlobalStlye'
import Header from './components/Header'
import CountryList from './components/CountryList'
import SingleCountry from './pages/SingleCountry'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ThemeProvider theme={{ ...darkMode, ...variables }}>
        <GlobalStyle />
        <Header />
        <main>
            <Container>
              <Routes>
                <Route path='/' element={<CountryList />} />
                <Route path=':common/:cca3' element={<SingleCountry />} />
              </Routes>
            </Container>
        </main>
      </ThemeProvider>
    </div>
  )
}

export default App
