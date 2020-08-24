import React from 'react';

import './Dropdown.style.scss';

const Dropdown = ({placeholder}) => {
    return (
        <div className='dropdown'>
            <select className='dropdown-select'>
                <option className='option'>{placeholder}</option>
                <option className='option'>2</option>
                <option className='option'>3</option>
                <option className='option'>4</option>
            </select>
        </div>
    )
}

export default Dropdown;