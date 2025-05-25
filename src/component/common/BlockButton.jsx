import React from 'react'

function BlockButton({label, onClick}) {
   return (
    <div className='d-grid gap-3'>
      <button type='button' className='btn btn-outline-primary btn-block' onClick={onClick}>{label}</button>
    </div>
  )
}

export default BlockButton