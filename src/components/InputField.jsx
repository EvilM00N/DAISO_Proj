import React from 'react'

function InputField({ title, name, defaultValue, onSelected }) {

    const handleChange = (e) => {
        onSelected(e.target.value);
    }

  return (
    <div  className='inputField'>
        <div className='input-label'>
          <label  htmlFor={name}>{title}</label>
        </div>
        <div className='inputBox'>
          <input 
              type="text" 
              name={name}
              id={name} 
              value={defaultValue} 
              onChange={(e) => handleChange(e)}
          />
        </div>  
    </div>
  )
}

export default InputField