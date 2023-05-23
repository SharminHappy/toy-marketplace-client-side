import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const SingleCategory = ({ toy }) => {
    const { _id, toyName, photoURL, price, rating } = toy || {};
    return (
        <div className="card  w-full p-1 glass">
            <figure><img src={photoURL} alt="car!" /></figure>
            <div className="card-body ">
                <h2 className="text-3xl font-semibold ">{toyName}</h2>
                <p className="font-semibold">Price: {price}</p>
                <div className="card-footer flex gap-2 ">

                    <div>
                        <Link to={`singleToy/${_id}`}>
                            <button className="btn btn-outline  text-white bg-pink-300 px-4  hover:bg-pink-500">View Details</button>
                        </Link>
                    </div>
                    <div className=" flex flex-grow">

                        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                        <span className="font-bold">{rating}</span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCategory;