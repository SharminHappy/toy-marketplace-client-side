import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToyTable from "./MyToyTable";

const MyToy = () => {
    const { user } = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([])  

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, [user]);
   

    return (
        <div>
            <div className="my-toys-container">
                <h1 className=" text-center p-4 tex-4xl">My Toys:{mytoys.length}</h1>

                <div className="overflow-x-auto w-full">
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
                                mytoys.map(mytoy => <MyToyTable
                                    key={mytoy._id}
                                    mytoy={mytoy}
                                   
                                ></MyToyTable>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToy;