import {Routes, Route} from 'react-router-dom'
import LoginView from './pages/LoginView/LoginView'
import HomeView from './pages/HomeView/HomeView'
import EstudiosView from './pages/EstudiosView/EstudiosView'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/login' element={<LoginView/>}/>
      <Route path='/estudios' element={<EstudiosView/>}/>
    </Routes>
    </>
  )
}

export default App