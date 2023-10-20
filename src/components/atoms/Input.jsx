import React from 'react'

function Input({placeholder, type, value, onChange, id}) {
  return (
    <>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} id={id} />
    </>
  )
}

export default Input