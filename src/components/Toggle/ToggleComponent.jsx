import React, { useState, useEffect } from 'react'

import './style.css'

import ToggleOff from '../../assets/icons/off.png'
import ToggleOn from '../../assets/icons/on.png'

const ToggleComponent = () => {
  const [toggle, setToggle] = useState(true)

  function handleToggle(stateToggle) {
    setToggle(stateToggle)
  }

  return (
    <button
      className="toggle-icon"
      onClick={ () => handleToggle(!toggle) }
    >
      <img src={ toggle ? ToggleOn : ToggleOff } alt="lamp-toggle" />
    </button>
  )
}

export default ToggleComponent