import React from 'react';

import { Dropdown } from "react-bootstrap";

import './Dropdown.style.scss';

const Drop = ({placeholder}) => {
    return (
        <div className='dropdown'>
            <Dropdown className="my-auto col text-center text-md-left">
                <Dropdown.Toggle id="dropdown-components">
                  {placeholder}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Price: Low to High</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Price: High to Low</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Size: Smallest to Largest
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Size: Largest to Smallest</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <select className='dropdown-select'>
                <option className='option'>{placeholder}</option>
                <option className='option'>2</option>
                <option className='option'>3</option>
                <option className='option'>4</option>
            </select> */}
        </div>
    )
}

export default Drop;