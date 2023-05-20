

const SingleCategory = ({ toy }) => {
    const { seller, toyName, subCategory, photoURL, price, rating, availableQuantity, detailDescription } = toy || {};
    return (
        <div className="card  w-auto p-2 glass">
            <figure><img src={photoURL} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Price:{price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions justify-between">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <button className="btn btn-primary bg-pink-800">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;