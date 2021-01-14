import React from 'react';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">{props.ButtonName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav">
                <li classNameName="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">About <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;