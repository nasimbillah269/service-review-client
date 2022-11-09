import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewRow from './ReviewRow';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const reviews = useLoaderData();
    const [displayReview, setDisplayReview] = useState(reviews);
    useTitle('My Review')

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete: ${id}`);
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const rimaining = displayReview.filter(review => review._id !== id)
                        setDisplayReview(rimaining)
                        toast.success('Successfully deleted!');
                    }
                })
        }
    }
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
                        displayReview.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ReviewRow>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyReview;