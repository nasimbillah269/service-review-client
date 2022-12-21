import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const { _id, email, name, photoURL, serviceImage, reviewMassage,
        userName } = storedReview;
    const [update, setUpdate] = useState(storedReview);
    const navigate = useNavigate();

    console.log(storedReview);
    const handleUpadate = event => {
        event.preventDefault()
        console.log(update);
        fetch(`https://service-review-server-khaki.vercel.app/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully');
                    navigate('/reviews')

                }

            })


    }

    const handleUpdateChang = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...update }
        newData[field] = value;
        setUpdate(newData)

    }
    return (
        <div>

            <form onSubmit={handleUpadate} className='bg-base-100 lg:w-9/12 p-8 mt-4 mb-4 lg:mx-auto shadow-2xl'>
                <h1 className='text-4xl text-center'>Update Review</h1>
                <p>Your Name*</p>
                <input onChange={handleUpdateChang} type="text" name="userName" defaultValue={userName} readOnly placeholder="Enter Your Name" className="input input-bordered input-info w-full my-4" />
                <p>PhotoURL*</p>
                <input onChange={handleUpdateChang} type="text" name="photoURL" placeholder="photoURL" defaultValue={photoURL} readOnly className="input input-bordered input-info w-full my-4" />
                <p>Service Name*</p>
                <input onChange={handleUpdateChang} type="text" name="name" defaultValue={name} readOnly placeholder="Enter Your Name" className="input input-bordered input-info w-full my-4" />
                <p>Email*</p>
                <input onChange={handleUpdateChang} type="email" name="email" placeholder="Inter Your Email" defaultValue={email} readOnly className="input input-bordered input-info w-full my-4" />
                <p>Service Id*</p>
                <input onChange={handleUpdateChang} type="text" name="serviceId" placeholder="service id" defaultValue={_id} readOnly className="input input-bordered input-info w-full my-4" />
                <p>Service Image*</p>
                <input onChange={handleUpdateChang} type="text" name="serviceImage" placeholder="service id" defaultValue={serviceImage} readOnly className="input input-bordered input-info w-full my-4" />
                <p>Update Review*</p>
                <textarea onChange={handleUpdateChang} name="reviewMassage" defaultValue={reviewMassage
                } className="textarea textarea-bordered w-full mt-4 p-8" placeholder="Enter Your massage"></textarea>
                <input className="btn btn-primary mt-4 center" type="submit" value="Update Review" />
            </form>
        </div>
    );
};

export default UpdateReview;