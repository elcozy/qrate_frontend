import React from 'react';

import './Input.style.scss';

const Input = ({inputName, placeholder, onChange}) => {
    return (
        <input 
        className='input' 
        type={inputName} 
        placeholder={placeholder}
        onChange={onChange}
        />
    )
}

export default Input;