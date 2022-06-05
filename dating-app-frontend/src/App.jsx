import React from "react"

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
     <h1>Gilcllys</h1>
     <button onClick={()=> setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
