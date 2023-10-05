import React from 'react'

function OutputField({ title, name, currentOutput }) {


  return (
    <div className='outputField'>
        <div className='output-label' >{title}</div>
        <div id={name}>{currentOutput} </div>
    </div>
  )
}

export default OutputField