import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './templates/Header.jsx'
import Footer from './templates/Footer.jsx'
import Calculator from './templates/Calculator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <main>
        <Calculator />

      </main>

      <Footer/>
    </>
  )
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App
