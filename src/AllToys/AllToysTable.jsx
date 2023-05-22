import { Link } from "react-router-dom";





const AllToysTable = ({ data }) => {

    // const { user} = useContext(AuthContext)
    const { _id, toyName, price,seller, availableQuantity,subCategory } = data || {};





    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{seller}</div>
                    </div>
                </div>
            </td>
            <td>
               {toyName}
            </td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs"><Link to={`/singleToy/${_id}`}>View Details</Link></button>
            </th>
        </tr>
    );
};

export default AllToysTable;