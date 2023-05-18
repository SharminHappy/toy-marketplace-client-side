

const Login = () => {
    const  handleLogin=event=>{
        event.preventDefault();
    }

    return (
        <div className="hero min-h-screen ">
            <div className="card  w-full max-w-sm shadow-2xl ">
                <h1 className="text-3xl text-center font-bold text-pink-300">Please Login !</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Login'/>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;