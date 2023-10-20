import React from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

function Check({type,id, textLabel, htmlFor }) {
  return (
    <>
        <Input type={type} id={id} />
        <Label htmlFor={htmlFor} textLabel={textLabel} />
    </>
  )
}

export default Check