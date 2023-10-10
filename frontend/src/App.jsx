
import './App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/homepage/Homepage'
import Profile from './pages/profile/Profile'
function App() {


  return (
    <>
    <div className='app_container'>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
