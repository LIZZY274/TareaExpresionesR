import React from 'react'
import Label from '../atoms/Label'
import Input from '../atoms/Input'

function Write({labelText, type, placeholder, value, onChange}) {
  return (
    <>
        <Label textLabel={labelText} />
        <Input type={type} placeholder={placeholder} value={value}  onChange={onChange} />
    </>
  )
}

export default Write