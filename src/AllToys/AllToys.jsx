
import { useLoaderData } from "react-router-dom";
import AllToysTable from "./AllToysTable";
// import { useState } from "react";

const AllToys = () => {

    const loadData = useLoaderData();
    
    console.log(loadData);
//     const[toySearch,setToySearch]=useState('');
//     const [searchText, setSearchText] = useState('')
// const handleSearch = () => {
//     fetch(`http://localhost:5000/toySearchByToyName/${searchText}`)
//         .then(res => res.json())
//         .then(data => {
//             setToySearch(data)
//         })

// }
    return (

        <div>
          {/* <div className="search-box p-2 text-center">
                    <input
                    onChange={(e)=>setSearchText(e.target.value)}
                    type="text"
                    className="p-2"
                    ></input>{''}
                    <button onClick={handleSearch}>Search</button>
                </div> */}
            <div className="overflow-x-auto w-full my-20">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            loadData.map(data => <AllToysTable
                                key={data._id}
                                data={data}
                            ></AllToysTable>)
                        }
                    </tbody>


                </table>
            </div>
        </div>



    );
};

export default AllToys;