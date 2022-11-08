import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen mb-5" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/restaurant-booking-illustration_1284-21315.jpg?size=626&ext=jpg&uid=R50409371&ga=GA1.2.1471171554.1652352605&semt=ais")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-4 text-3xl font-bold">Welcom special Food Service Review</h1>
                    <p className="mb-5">a popular genre on social media platform, YouTube. A number of young minds in Bangladesh started sharing food videos, particularly food reviews and vlogging,</p>
                    <button className="btn btn-outline btn-warning w-1/2 mt-7">Last Go !</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;