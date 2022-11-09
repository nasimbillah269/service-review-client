import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { HiStar } from "react-icons/hi";

const SingleLimitService = ({ service }) => {
    const { _id, name, price, rating, image, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img src={image} alt="foods" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title m-0">{name}</h2>
                <div className='flex justify-end'>
                    <p className='font-bold'>${price}</p>
                    <div className='flex'>
                        <p className='mr-2 font-bold'>{rating}</p>
                        <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                        <p className='text-yellow-300 mt-1' ><HiStar></HiStar></p>
                        <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                        <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                        <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                    </div>
                </div>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleLimitService;