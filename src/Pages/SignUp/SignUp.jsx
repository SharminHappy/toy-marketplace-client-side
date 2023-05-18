import { useContext } from "react";
import { Link } from "react-router-dom";
import  { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

    const {createUser}=useContext(AuthContext)


    const handleSignUp = event => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;

        console.log(name,email,photo,password);

        createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error.message)
        })
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
                        <div className="form-control mt-6">
                            <input className="btn btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Register' />

                        </div>
                    
                </form>
                <p className="text-center mb-4">Already have an account?<Link to='/login' className="text-pink-300 font-bold">Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;