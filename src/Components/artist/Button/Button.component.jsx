import React from 'react';

import './Button.style.scss';

const Button = ({text}) => {
    return (
        <button className='view_button'>{text}</button>
    )
}

export default Button;