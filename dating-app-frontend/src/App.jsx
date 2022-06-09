import React from "react"
import DatingCards from "./components/DatingCard"
import Header from "./components/Header"
import SwipeButtons from "./components/SwipeButtons"

function App() {

  return (
    <div className="App">
     <Header/> 
     <DatingCards />
     <SwipeButtons />
    </div>
  )
}

export default App
