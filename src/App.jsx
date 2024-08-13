import './App.css'
import Header from './components/Header/Header'
import Routes from './routes'
import Footer from './components/Footer'
import { useState } from 'react'
function App() {

  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`app ${isDark && 'dark'} text-black dark:text-white bg-white dark:bg-inherit`}>
      <Header />
      <div className='container'>
        <Routes></Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
