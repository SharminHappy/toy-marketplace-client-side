import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SingleToy = () => {
    const toys = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, toyName, photoURL,price,rating,availableQuantity,detailDescription } = toys;
    return (
        <div className="card card-side bg-base-100 shadow-xl my-20 w-full h-1/2">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title text-4xl bold">{toyName}</h2>
                <div className="m-4">
                <p>Seller Name:{user.displayName}</p>
                <p>Seller Email:{user.email}</p>
                <p>Price:{price}</p>
                <p>Available Quantity:{availableQuantity}</p>
                <p>{detailDescription}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;