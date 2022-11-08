import React, { useContext } from 'react';
import signup from '../../../src/assets/image/signup.jpg'
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext)

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
            })
            .catch(error => {
                console.error(error)
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;