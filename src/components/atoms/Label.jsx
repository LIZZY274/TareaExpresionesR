import React from 'react'

function Label({textLabel, htmlFor}) {
  return (
    <>
        <label htmlFor={htmlFor}>{textLabel}</label>
    </>
  )
}

export default Label