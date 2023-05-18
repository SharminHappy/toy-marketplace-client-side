import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate=useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
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
                    <div className="form-control mt-6">
                        <input className="btn btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Login' />
                    </div>
                </form>
                <div className="  text-center mx-3 mb-4 ">
                    <p className="mb-3">Or Login With</p>
                    <button className=" border-none"><Link to='/google' className="text-4xl"><FcGoogle></FcGoogle></Link></button>
                </div>
                <p className="text-center mb-4">Does not have an account yet?<Link to='/register' className="text-pink-300 font-bold">Register</Link></p>
            </div>

        </div>

    );
};

export default Login;