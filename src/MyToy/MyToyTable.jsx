

const MyToyTable = ({ mytoy,handleDelete}) => {
    const {_id,toyName,price,seller, availableQuantity, subCategory } = mytoy || {};
    

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
            {/* <td>
                {
                    <button
                    onClick={()=>setModalShow(true)}
                    
                    >Edit</button>
                    
                }
            </td> */}
            
                <td>
                    <button className="btn btn-ghost btn-xs">edit</button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button>
                </td>
            
        </tr>

    );
};

export default MyToyTable;