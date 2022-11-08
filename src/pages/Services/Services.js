import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {/* <h3>{services.length}</h3> */}
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;