import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Counter from './components/Counter'
import FormWithState from './components/Forms/FormWithState'
import Effect from './components/hooks/Effect'
import Effect2 from './components/hooks/Effect2'
import Ref from './components/hooks/useRef/Ref'
import Ref2 from './components/hooks/useRef/Ref2'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Products from './pages/Products'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<Products/>}/>
    </Routes>
  )
}

export default App
