import React from 'react'

function Button({textButton, type}) {
  return (
    <>
        <button type={type}>{textButton}</button>
    </>
  )
}

export default Button