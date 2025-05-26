import React from 'react'

function BlockButton({label, onClick, style}) {
  const className = `btn btn-outline-${style} btn-block`;
  return (
    <div className='d-grid gap-3'>
      <button type='button' className={className} onClick={onClick}>{label}</button>
    </div>
  )
}

export default BlockButton