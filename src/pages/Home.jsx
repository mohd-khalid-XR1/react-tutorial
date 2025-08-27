import React, { useEffect } from 'react'
import Counter from '../components/Counter'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      console.log('Data is fetched');
      navigate('/product')
    }, 4000)
  }, [])
  return (
    <div>
      <Navbar />
      <Counter />
    </div>
  )
}

export default Home