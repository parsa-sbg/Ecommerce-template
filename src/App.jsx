import './App.css'
import Header from './components/Header/Header'
import Routes from './routes'

function App() {

  return (
    <div className='app text-black dark:text-white bg-white dark:bg-inherit'>
      <Header />
      <div className='container'>
        <Routes></Routes>
      </div>
    </div>
  )
}

export default App
