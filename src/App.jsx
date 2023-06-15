import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apranq from './component'
function App() {
  const [count, setCount] = useState(0)

  const hashvark = [
    { id: 1, name: 'Aprnq 1', date: '2023-05-27', count: 6, price: 8 },
    { id: 2, name: 'Apranq 2', date: '2023-05-28', count: 3, price: 15 },
    { id: 3, name: 'Apranq 3', date: '2023-05-29', count: 7, price: 13 },
    { id: 4, name: 'Apranq 4', date: '2023-05-30', count: 4, price: 3 }
  ];

  return (
     <Apranq hashvark={hashvark} />
  )

}

export default App
