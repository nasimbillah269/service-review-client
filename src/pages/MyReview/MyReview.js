import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewRow from './ReviewRow';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const MyReview = () => {
    const reviews = useLoaderData();
    const [displayReview, setDisplayReview] = useState(reviews);
    // const { user, logOut } = useContext(AuthContext);
    // const [userReviews, setUserReviews] = useState([]);

    useTitle('My Review')

    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews?email=${user.email}`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('reviews-token')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 401 || res.status === 403) {
    //                 logOut()
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             setDisplayReview(data)

    //         })
    // }, [user?.email])

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
                        reviews.length > 0 ?
                            displayReview.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                            :
                            <p className='text-center text-2xl font-bold'>No reviews were added</p>
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyReview;