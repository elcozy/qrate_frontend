import React from 'react';

import './Button.style.scss';

const Button = ({text, children, inverted, cancel, click}) => {
    return (
        <button 
        className={
            inverted ? `inverted` : cancel ? `cancel` : `view_button`
        }
        onClick={click}>
            {text} {children}
        </button>
    )
}

export default Button;