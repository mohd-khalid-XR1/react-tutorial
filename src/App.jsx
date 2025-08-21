import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Counter from './components/Counter'

function App() {


  const WebsiteName = "Tutorial-React"
  const websiteImage = 'https://images.pexels.com/photos/27237515/pexels-photo-27237515.jpeg'
  const element = <a href="#">{WebsiteName}</a>
  let count = 0

  const increment = () => {
    count = count + 1
    console.log(count);
  }

  return <>
    <Navbar
      websiteName={WebsiteName}
      websiteImage={websiteImage}
      element={element}
    />
    <h1>Count : {count}</h1>
    <button onClick={increment}>Increment</button>
    <Login />
    <Footer />
    <Counter/>
  </>
}

export default App
