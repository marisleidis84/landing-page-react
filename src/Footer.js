import React from 'react';

const Footer = (props) => {
    return (
        <footer className="p-4 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">{props.textfooter}</p>
            </div>
        </footer>
    );
};

export default Footer;