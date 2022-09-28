import './App.css';
import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"

const App = () => {

  const [ squares, setSquares ] = useState(boxes)

  const toggle = (id) => {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }
   
    const squareElements = squares.map((square) => (
      <Box 
        key={square.id} 

        on={square.on}
        toggle={() => toggle(square.id)}                
        />
    ))

  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App