import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";


const MyToy = () => {
    const { user } = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([])  
    // const [modalShow,setModalShow]=useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, [user]);

    const handleDelete=(_id)=>{
        console.log("delete icon ",_id);
        fetch(`http://localhost:5000/toys/${_id}`,{
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

    // const handleUpdate=(_id)=>{
    //     fetch(`http://localhost:5000/toys/${_id}`,{
    //         method:'PUT',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify({status:'confirm'})
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         if(data.modifiedCount>0){
    //             // update
    //             const remaining =mytoys.filter(toy=>toy._id !== _id);
    //             const updated=mytoys.find(toy=>toy._id === _id);
    //             updated.status='confirm';
    //             const newToy=[updated,...remaining];
    //             setMytoys(newToy);
    //         }
    //     })
    // }
   

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