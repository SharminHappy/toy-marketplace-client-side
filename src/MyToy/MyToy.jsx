import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";


const MyToy = () => {
    const { user } = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([])  
    // const [modalShow,setModalShow]=useState(false);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-chi-mocha.vercel.app/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, [user]);

    const handleDelete=(_id)=>{
        console.log("delete icon ",_id);
        fetch(`https://toy-marketplace-server-chi-mocha.vercel.app/toys/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
                const remaining=mytoys.filter(toy=>toy._id !== _id);
                setMytoys(remaining);


            }
        })

    }

 

    return (
        <div>
            <div className="my-toys-container">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full my-10">
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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                mytoys.map(mytoy => <MyToyTable
                                    key={mytoy._id}
                                    mytoy={mytoy}
                                    user={user}
                                    handleDelete={handleDelete}
                                   
                                   
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