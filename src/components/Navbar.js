import React from 'react';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">{props.ButtonName}</a>
        <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">{props.home} <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.about} <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.service}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">{props.contact}</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;