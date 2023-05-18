import { Link } from "react-router-dom";


const SignUp = () => {
    const handleSignUp=event=>{
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen my-11">
            <div className="card  w-full max-w-sm shadow-2xl">
                <h1 className="text-3xl text-center font-bold text-pink-300">Please Register!</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Your Phone Number" name="phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email Address" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder="Confirm Password" name="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Register'/>
                    </div>
                </form>
                <p className="text-center my-4">Already have an account?<Link to='/login' className="text-pink-300 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;