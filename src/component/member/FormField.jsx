import React from 'react'

function FormField({name, type='text', label, field}) {
  const { value, change, check, message } = field;
  return  (
    <div className='mt-3 mb-3'>
      <label htmlFor={name} className='form-label'>{label}:</label>
      <input type={type} className='form-control' onChange={change}  onBlur={check} value={value}/>
      {message!=='' && <span style={{color:'red'}}>{message}</span>}
    </div>
  )
}

export default FormField