import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    console.log(service);
    const { _id, name, price, rating, image, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="foods" /></figure>
            <div className="card-body">
                <h2 className="card-title m-0">{name}</h2>
                <div className='flex justify-end'>
                    <p>${price}</p>
                    <p>{rating}</p>
                </div>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;