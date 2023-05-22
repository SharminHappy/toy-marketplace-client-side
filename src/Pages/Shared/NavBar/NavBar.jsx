import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";




const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [hover, setHover] = useState(false)
    const onHover = (e) => {
        e.preventDefault();
        setHover(true);
        console.log('hovered above image');
    }

    const onHoverOver = (e) => {
        e.preventDefault();
        setHover(false);
    };

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>


                    <li ><Link to='/alltoys'>All Toys</Link></li>
                    <li><Link to='/mytoy'>My Toys</Link></li>
                    <li><Link to='/addtoy'>Add A Toy</Link></li>
                    <li><button onClick={handleLogOut} className="btn btn-outline btn-secondary">Logout</button></li>

                </>
                :
                <li className=""><Link to='/login'><button className="btn btn-outline btn-secondary">Login</button></Link></li>
        }
    </>
    return (
        <div className="navbar  bg-pink-50 rounded ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><span className="text-4xl font-bold text-sky-200">KIDO</span><span className="text-4xl font-bold text-pink-200">TOYS</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500  ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div>
                        <div className="flex gap-2">
                            {hover && <p className='hover'>{user.displayName}</p>}
                            <img
                                onMouseEnter={(e) => onHover(e)}
                                onMouseLeave={(e) => onHoverOver(e)}
                                alt=""
                                src={user.photoURL}
                                className="img-responsive w-10 rounded-full mr-3 "
                            />
                        </div>
                    </div>
                }

            </div>

        </div>
    );
};

export default NavBar;