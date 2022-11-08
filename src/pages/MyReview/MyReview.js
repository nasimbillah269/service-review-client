import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const reviews = useLoaderData();
    return (
        <div className="overflow-x-auto lg:w-9/12 mx-auto my-12">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Service Name</th>
                        <th>Users</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        reviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                        ></ReviewRow>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyReview;