import React from 'react'

const Button = ({ classname, btn_text, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      className={classname}
      onClick={onClick}
      disabled={disabled}
    >
      {btn_text}
    </button>
  )
}

export default Button