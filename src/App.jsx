import { useState } from "react"
import "./App.css"
import CountDown from './CountDown'

const App = () => {

  const [select, setSelect] = useState("")
  

  return (
    <div className='App'>
      <CountDown seconds={3000} />
    </div>
  )
}

export default App