import React from 'react'
import './screen.css'


const Screen = ({calc,result}) => {
    
  return (
    <div className="screen">
        <div className="text-screen">
            {calc || "0"}{result ? <span className="eval">{result}</span> : ""}
        </div>
    </div>

  )
}


export default Screen
