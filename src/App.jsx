import './App.css'
import Header from './components/Header/Header'
import Routes from './routes'
import Footer from './components/Footer'
function App() {

  return (
    <div className='app text-black dark:text-white bg-white dark:bg-inherit'>
      <Header />
      <div className='container'>
        <Routes></Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
