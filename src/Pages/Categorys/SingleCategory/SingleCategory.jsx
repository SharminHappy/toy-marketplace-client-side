

const SingleCategory = ({ category }) => {
    const { seller,toyName,subCategory,photoURL,price,rating,availableQuantity,detailDescription } = category;
    return (
        <div className="card w-96 glass">
            <figure><img src={photoURL} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Price:{price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;