import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Content from './Components/Content.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
    <Content color="blue" text="This is my first React Application!"/>
    <Content color="red" text="Wish me luck..."/>
    <Content color="green" text="I think I've got it!"/>
    <Footer/>
    </>
  )
}

export default App
