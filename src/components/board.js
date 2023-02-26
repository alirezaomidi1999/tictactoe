import React, { useState } from 'react'
import Square from './square'
function Board() {

    const [squares, setSquares] = useState([

      '','','','','','','','',''
    ])
    const [shapes,setShapes] = useState(true)

    const checkWinner = () =>{

      let winner = [

        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
      ]
      

      for (const iterator of winner) {
        const [a,b,c] = iterator
        if(squares[a] !== '' && squares[a] === squares[b] && squares[a] === squares[c]){



          return true
        }
        
      }
      
      return false
    }

    
    const isWinner = checkWinner()
 
    const clickHandler = (index)=> {

      if(squares[index] !== ''){

        return
      }
      const newsquares = [...squares]
      newsquares[index] = shapes ? 'X' : 'O'
      setShapes(!shapes)
      setSquares(newsquares)

        


    }

    return (
       
        <>
            <div className="square-container">
    
              {isWinner ? shapes ? 'O is Won':'X is Won': squares.map((square,index) => {return <Square key ={index} onClick ={() => clickHandler(index)} value = {squares[index]} ></Square>})}
             
            </div>
        </>
    )
}
export default Board