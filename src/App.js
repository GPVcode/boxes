import './App.css';
import React, {useState} from "react"
import boxes from "./boxes"
import Box from "./Box"

const App = () => {

  const [squares, setSquares] = useState(boxes)
  
    const squareElements = squares.map((square) => (
      <Box key={square.id} on={square.on} />
    ))

  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App