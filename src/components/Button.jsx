import React from 'react'
import './button.css'

const Button = ({handleClick,value,type}) => {
    const classBtn = `btn ${type}`
  return (
    <button className={classBtn} onClick={() => handleClick(value)}>
            {value}
    </button>
  )
}

export default Button