import React from 'react';

import './Button.style.scss';

const Button = ({text, children, inverted}) => {
    return (
        <button className={inverted ? `inverted` : `view_button`}>{text} {children}</button>
    )
}

export default Button;