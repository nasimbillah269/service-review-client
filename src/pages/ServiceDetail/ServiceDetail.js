import React from 'react';
import { useLoaderData, } from 'react-router-dom';

const ServiceDetail = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails);
    const { name, price, rating, image, description } = serviceDetails;
    return (
        <div className="card lg:card-side bg-base-100 lg:w-9/12 p-8 mt-4 mb-4 lg:mx-auto shadow-2xl">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className=''>
                    <img className='w-full h-full rounded-lg' src={image} alt="Album" />
                </div>
                <div className="card-body w-full">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-end'>
                        <p className='text-1xl font-bold'>${price}</p>
                        <p className='text-1xl font-bold'>{rating}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;