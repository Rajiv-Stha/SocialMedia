
import './App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/homepage/Homepage'
import Profile from './pages/profile/Profile'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
function App() {


  return (
    <>
    <div className='app_container'>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
