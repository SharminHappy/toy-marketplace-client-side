
import { FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div className="w-full ">
            <img className=" mx-auto h-96" src="https://i.ibb.co/dPKvwL2/404-error-with-cute-animal-concept-illustration-114360-1919.jpg" alt="" />
           <Link to='/'> <button className="bg-pink-200 w-60 gap-10 p-2 text-white text-bold text-3xl flex"><FaArrowLeft></FaArrowLeft>GO BACK</button></Link>
        </div>
    );
};

export default Error;