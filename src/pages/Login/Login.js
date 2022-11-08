import React, { useContext } from 'react';
import signup from '../../../src/assets/image/signup.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { signIn, googleSingIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                toast.success('Successfully');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('Successfully');
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen lg:w-9/12 p-8 my-12  mx-auto bg-base-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="">
                    <img className='rounded-2xl shadow-2xl h-full' src={signup} alt="" />
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='text-center m-0'>OR</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full m-0"><FcGoogle className='mr-4 text-3xl'></FcGoogle> <span className='text-3xl'>Google</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;