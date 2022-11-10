import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { variables, darkMode, lightMode } from './themes'
import GlobalStyle from './GlobalStlye'
import MainPage from './pages/MainPage'
import Header from './components/Header'
import SingleCountry from './pages/SingleCountry'
import Container from './components/Container'

function App() {
  const [theme, setTheme] = useState('dark')
  const mode = theme === 'dark' ? darkMode : lightMode

  return (
    <div className="App">
      <ThemeProvider theme={{ ...mode, ...variables }}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />
        <Container>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path=':common/:cca3' element={<SingleCountry />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
