import React from 'react';

const Nav = ( props ) => {
    console.log(props, props.display);

    return (
        <div className="nav d-inline-flex align-items-stretch mb-6">
            <button className="btn text-light" onClick={() => props.onClick("Interview")}>Featured Artists</button>
            <button className="btn bg-white text-dark px-3" onClick={() => props.onClick("Featured")}>Interviews</button>
            <button className="bg-black text-light border px-3 ml-3"><i className="fa fa-search"></i></button>
        </div>
    )
}

export default Nav;