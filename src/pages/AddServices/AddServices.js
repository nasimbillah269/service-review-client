import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('AddServices')

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;



        const servicesInfo = {
            name,
            price,
            rating,
            image,
            description

        }

        fetch('https://service-review-server-khaki.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(servicesInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully');
                    form.reset();

                }
            })
    }

    return (
        <form onSubmit={handleAddService} className='bg-base-100 lg:w-9/12 p-8 mt-4 mb-4 lg:mx-auto shadow-2xl'>
            <h1 className='text-4xl text-center'>Add Service</h1>
            <p>Service Name*</p>
            <input type="text" name="name" placeholder="Enter service Name" className="input input-bordered input-info w-full my-4" required />
            <p>Price*</p>
            <input type="text" name="price" placeholder="price" className="input input-bordered input-info w-full my-4" required />
            <p>Rating*</p>
            <input type="text" name="rating" placeholder="reting" className="input input-bordered input-info w-full my-4" required />
            <p>Service Image*</p>
            <input type="text" name="image" placeholder="photoURL" className="input input-bordered input-info w-full my-4" required />
            <p>Description*</p>
            <textarea name="description" className="textarea textarea-bordered w-full mt-4 p-8" placeholder="Enter Your massage" required></textarea>
            <input className="btn btn-primary mt-4 center" type="submit" value="Add Services" />
        </form>
    );
};

export default AddServices;