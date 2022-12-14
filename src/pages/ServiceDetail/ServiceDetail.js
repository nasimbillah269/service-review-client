import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { HiStar } from "react-icons/hi";
import { toast } from 'react-hot-toast';

const ServiceDetail = () => {
    const serviceDetails = useLoaderData()
    const { user } = useContext(AuthContext);
    useTitle('Service detail')
    console.log(serviceDetails);
    const { _id, name, price, rating, image, description } = serviceDetails;
    const navigate = useNavigate();

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const serviceId = form.serviceId.value;
        const serviceImage = form.serviceImage.value;
        const reviewMassage = form.massage.value;
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;

        console.log(name, email, serviceId, serviceImage, reviewMassage, userName, photoURL);

        const reviewInfo = {
            name,
            email,
            userName,
            photoURL,
            serviceId,
            serviceImage,
            reviewMassage
        }

        fetch('https://service-review-server-khaki.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully Review!');
                navigate('/reviews')
            })
    }

    return (
        <div >
            <div className="card lg:card-side bg-base-100 lg:w-9/12 p-8 mt-4 mb-4 lg:mx-auto shadow-2xl">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className=''>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='w-full h-full rounded-lg' src={image} alt="Album" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="card-body w-full">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className='flex justify-end'>
                            <p className='text-1xl font-bold'>${price}</p>
                            <div className='flex'>
                                <p className='mr-2 font-bold'>{rating}</p>
                                <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                                <p className='text-yellow-300 mt-1' ><HiStar></HiStar></p>
                                <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                                <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                                <p className='text-yellow-300 mt-1'><HiStar></HiStar></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {
                user?.uid ? <form onSubmit={handleReview} className='bg-base-100 lg:w-9/12 p-8 mt-4 mb-4 lg:mx-auto shadow-2xl'>
                    <h1 className='text-4xl text-center'>Review</h1>
                    <p>Your Name*</p>
                    <input type="text" name="userName" defaultValue={user?.displayName} readOnly placeholder="Enter Your Name" className="input input-bordered input-info w-full my-4" />
                    <p>PhotoURL*</p>
                    <input type="text" name="photoURL" placeholder="photoURL" defaultValue={user?.photoURL} readOnly className="input input-bordered input-info w-full my-4" />
                    <p>Service Name*</p>
                    <input type="text" name="name" defaultValue={name} readOnly placeholder="Enter Your Name" className="input input-bordered input-info w-full my-4" />
                    <p>Email*</p>
                    <input type="email" name="email" placeholder="Inter Your Email" defaultValue={user?.email} readOnly className="input input-bordered input-info w-full my-4" />
                    <p>Service Id*</p>
                    <input type="text" name="serviceId" placeholder="service id" defaultValue={_id} readOnly className="input input-bordered input-info w-full my-4" />
                    <p>Service Image*</p>
                    <input type="text" name="serviceImage" placeholder="service id" defaultValue={image} readOnly className="input input-bordered input-info w-full my-4" />
                    <p>Review*</p>
                    <textarea name="massage" className="textarea textarea-bordered w-full mt-4 p-8" placeholder="Enter Your massage"></textarea>
                    <input className="btn btn-primary mt-4 center" type="submit" value="Add Review" />
                </form>
                    : <p className='text-3xl text-center my-12'>Please login to add a review? <Link to='/login'><button className="btn btn-sm">Login</button></Link></p>
            }
        </div>
    );
};

export default ServiceDetail;