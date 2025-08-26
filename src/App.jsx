import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Counter from './components/Counter'
import FormWithState from './components/Forms/FormWithState'
import Effect from './components/hooks/Effect'
import Effect2 from './components/hooks/Effect2'
import Ref from './components/hooks/useRef/Ref'
import Ref2 from './components/hooks/useRef/Ref2'

function App() {


  const WebsiteName = "Tutorial-React"
  const websiteImage = 'https://images.pexels.com/photos/27237515/pexels-photo-27237515.jpeg'
  const element = <a href="#">{WebsiteName}</a>
  let count = 0

  const increment = () => {
    count = count + 1
    console.log(count);
  }
  const submit = (e) => {

  }

  return <>
    {/* <Navbar
      websiteName={WebsiteName}
      websiteImage={websiteImage}
      element={element}
    /> */}
    {/* <h1>Count : {count}</h1>
    <button onClick={increment}>Increment</button> */}
    {/* <FormWithState /> */}
    {/* <Effect/> */}
    {/* <Effect2/> */}
    {/* <Ref/> */}
    <Ref2/>
  </>
}

export default App
