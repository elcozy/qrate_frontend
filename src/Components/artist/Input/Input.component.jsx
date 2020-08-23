import React from 'react';

import './Input.style.scss';

const Input = ({inputName, placeholder}) => {
    return (
        <input className='input' type={inputName} placeholder='Search &#xF002;'/>
    )
}

export default Input;