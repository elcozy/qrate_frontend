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
                  <Dropdown.Item eventKey="1">1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">2</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    3
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">4</Dropdown.Item>
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