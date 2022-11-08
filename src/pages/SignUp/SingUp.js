import React, { useContext } from 'react';
import signup from '../../../src/assets/image/signup.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SingUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                upadateProfile(name, photoURL)
                console.log(user);
                toast.success('Successfully created!');
                form.reset();
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })
    }

    const upadateProfile = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {
                console.log('update user');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen lg:w-9/12 p-8 my-12 mx-auto bg-base-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="">
                    <img className='rounded-2xl shadow-2xl h-full' src={signup} alt="" />
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="photoURL" name="photoURL" placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;