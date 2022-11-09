import React from 'react';
import about from '../../assets/image/about.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:w-9/12 p-8 my-12 mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="">
                        <img className='rounded-2xl shadow-2xl h-full' src={about} alt="" />
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-3xl text-center font-bold mt-2'>About us</h1>
                        <p className='p-3 mt-5'>In a world where delivery has become the new normal, you may find yourself wondering what the general consensus is for tipping your delivery drivers. After all, they go through a lot to get your order to you safely and securely</p>

                        <p className='p-3 mt-6 font-semibold text-rose-700'>
                            Food is necessary for every person’s overall well-being and survival. How you obtain this fuel for life is completely up to you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;