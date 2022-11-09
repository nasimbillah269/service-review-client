import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleLimitService from '../LimitService/SingleLimitService';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold text-center my-4'>Service</h2>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <SingleLimitService
                        key={service._id}
                        service={service}
                    ></SingleLimitService>)
                }

            </div>
            <div className=' text-center my-5'>
                <Link to='/services'><button className="btn btn-outline btn-primary w-64 ">See All</button></Link>
            </div>

        </div>
    );
};

export default Home;