import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const reviews = useLoaderData();
    return (
        <div>
            <h3>My Review page:{reviews.length}</h3>
        </div>
    );
};

export default MyReview;