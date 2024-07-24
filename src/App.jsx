import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

const App = () => {
  const [count, setCount] = useState(0);
  const mp=[1,2,3,4,5,6,7,8,9];
  const [val,setVal]=useState([]);
  const [Xturn,setXturn]=useState(true);
  const [play,setPlay]=useState('');
  const [history,setHistory]=useState({XWon:0,YWon:0})
  const [matches,setMatches]=useState(0);
  const sx={padding:"10px", border:"2px solid",width:"60px", height:"60px"};
  const fx={display:"flex"}

  const checkWinner=()=>{
      const log=[
            [1,2,3],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
      ]
    
    for(let triplet of log){
      const [a,b,c]=triplet
      if(val[a-1] && val[a-1]==val[b-1] && val[b-1]== val[c-1]){
        return val[a-1];
      }
  }
    let i=0;
    for(let value of val){
      if(value)i+=1;
    }
    if(i==9){
      buttonHandler();
       }
   return false;
  }

  
  const handleClick=(e)=>{
   
    const value=e.target.getAttribute('value');
    if(val[value-1]){
      alert("Already filled")
      return
    }else{
      if(Xturn){
         setVal(prev=>{
        const newArray = [...prev];  
       newArray[value - 1] = "X";
       setXturn(false)
       return newArray;  
      })
      }else{
        setVal(prev=>{
        const newArray = [...prev];  
       newArray[value - 1] = "O";
       setXturn(true)
       return newArray;  
      })
      }
  }
    
  }
  const buttonHandler=()=>{
    setPlay('');
    setXturn(true)
    setVal([])
    setMatches(prev=>prev+1)
  }
    const winner=checkWinner();
 
   useEffect(()=>{
        setHistory(prev => ({
  ...prev,
  XWon: prev.XWon + (winner === 'X' ? 1 : 0),
  YWon: prev.YWon + (winner === 'O' ? 1 : 0)
}));
     
},[winner])
 console.log("rendered")

  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      {winner?(<div className="">
        <p> Player {winner}  Won</p>
        <button onClick={buttonHandler}>Play Again</button>
      </div>):(
       <div className="board-container"  style={{padding:"10px"}}>
      <div className="row1" style={fx}>
          <div className="" style={sx} value={1} onClick={handleClick}>
            {val[0]}
           </div>
        <div className="" style={sx} value={2} onClick={handleClick}>
                {val[1]}
           </div>
        <div className="" style={sx} value={3} onClick={handleClick}>
               {val[2]}
           </div>
      </div>
      <div className="row2" style={fx}>
         <div className="" style={sx} value={4} onClick={handleClick}>
             {val[3]}
           </div>
        <div className="" style={sx} value={5} onClick={handleClick}>
              {val[4]}
           </div>
        <div className="" style={sx} value={6} onClick={handleClick}>
              {val[5]}
           </div>
      </div>
      <div className="row3" style={fx}>
         <div className="" style={sx} value={7} onClick={handleClick}>
              {val[6]}
           </div>
        <div className="" style={sx} value={8} onClick={handleClick}>
              {val[7]}
           </div>
        <div className="" style={sx} value={9} onClick={handleClick}>
              {val[8]}
           </div>
      </div>
         <div className="">
         <p>A won-{history.XWon}</p>
          <p>B won-{history.YWon}</p>
           <p>Total Matches-{matches}</p>
           </div>
    </div>
    )
      }
      </>
  )
}



export default App