import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={props.icon}></i> {props.title} </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Pesquisar',
    icon: 'fab fa-github'
};

Navbar.proTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;