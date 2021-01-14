import React from 'react';

const Card = (props) =>{
    return(
        <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.buttonlabel}</a>
            </div>
        </div>
    );
};

export default Card;