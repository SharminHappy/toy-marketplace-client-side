import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const Login = () => {

    const { signIn } = useContext(AuthContext);


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'

    // google
    const provider = new GoogleAuthProvider();
    const handlerGoogleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    const handleLogin = event => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

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

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen my-11">
            <div className="card  w-full max-w-sm shadow-2xl">
                <h1 className="text-3xl text-center font-bold text-pink-300">Please Login!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name="password" className="input input-bordered" required />
                        
                    </div>
                    <p className="text-red-600"> {error}</p>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Login' />
                    </div>
                </form>
                <div className="  text-center mx-3 mb-4 ">
                    <p className="mb-3">Or Login With</p>
                    <button onClick={handlerGoogleLogIn} className=" border-none text-4xl"><FcGoogle></FcGoogle></button>
                </div>
                <p className="text-center mb-4">Does not have an account yet?<Link to='/register' className="text-pink-300 font-bold">Register</Link></p>
                <p className="text-green-500">
                    {success}
                </p>
            </div>

        </div>

    );
};

export default Login;