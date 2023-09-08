import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'
import Posts from './Posts'
import Friends from './friends'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>React azir</h1>
      <Friends></Friends>
      <Users></Users>
      <Posts></Posts>



    </>
  )
}

export default App
