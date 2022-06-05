import React from "react"
import Header from "./components/Header"

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
     <Header/> 
    </div>
  )
}

export default App
