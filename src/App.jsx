import './App.css'
import Header from './components/Header/Header'
import Routes from './routes'
import Footer from './components/Footer'
import { useState } from 'react'
import ToggleThemeBtn from './components/ToggleThemeBtn'


function App() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`app ${isDark && 'dark'} transition-colors text-black dark:text-white bg-white dark:bg-inherit`}>
      <Header />
      <div className='container'>
        <Routes></Routes>
      </div>
      <Footer />
      <ToggleThemeBtn isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

export default App
