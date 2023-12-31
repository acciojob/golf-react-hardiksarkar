import React,{useState} from 'react'
import "../styles/App.css"

export default function App() {
let [ballrender,setBallrender] = useState(false);
let [right,setRight] = useState(0);

    function startFunc(){
        setBallrender(true);
    }

    const handleKeyDown=(e)=>{
        console.log("right");
        if(e.key === 'ArrowRight' || e.key === 'Enter'){
            setRight(right-5);
        }
    }


  return (
    <div className='playground' onKeyDown={(e)=>handleKeyDown(e)}>
      {
        ballrender?(<div className='ball' style={{right:`${right}px`}} onKeyDown={handleKeyDown} tabIndex="0"></div>):(<button className='start' onClick={startFunc}>Start</button>)
      }
    </div>
  )
}
