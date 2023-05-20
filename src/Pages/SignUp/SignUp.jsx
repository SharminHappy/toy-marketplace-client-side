import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSignUp = event => {
        event.preventDefault();

        setError('');
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // console.log(name, email, photo, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('You Have To At Least One Uppercase');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('You Have To At Least One Special Characters');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('You Have To At Least One Number')
            return;
        }

        else if (password.length < 6) {
            setError('You Have To At Least  6 Characters in Your Password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('User Created Account Successfully');
                updateUserData(result.user, name, photo);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('');
            })

        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('user profile updated')
                })
                .catch(error => {
                    setError(error.message)
                })

        }
    }


    return (
        <div className="hero min-h-screen w-full  my-11">
            <div className="card  w-full max-w-lg shadow-2xl">
                <h1 className="text-3xl text-center font-bold text-pink-300">Please Register!</h1>
                <form onSubmit={handleSignUp} className="card-body">

                    <div className="flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email Address" name="email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder="Confirm Password" name="password" className="input input-bordered" />
                    </div>
                    <p className=" text-red-500">{error}</p>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Register' />

                    </div>

                </form>
                <p className="text-center mb-4">Already have an account?<Link to='/login' className="text-pink-300 font-bold">Login</Link></p>
                <p className=" text-green-500"> {success}</p>
            </div>

        </div>
    );
};

export default SignUp;