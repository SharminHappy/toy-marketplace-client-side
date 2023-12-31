import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const UpdateToyModal = () => {
    const { user } = useContext(AuthContext);
    const loadedToy = useLoaderData();

    const { _id, toyName, price,availableQuantity,  detailDescription, photoURL, rating } = loadedToy || {};
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://toy-marketplace-server-chi-mocha.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {

                'content-type': 'application/json',
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title:'Success!',
                        text:'Toy Updated Successfully',
                        icon:'success',
                        confirmButtonText:'Cool'


                    })
                }

            })
        console.log(data);
    }





    return (
        <div className="  mx-auto my-auto p-11 ">
            <img className="w-full" src="https://i.ibb.co/6BqVhw8/stuffed-toy-animals-white-displayed-shelf-3d-rendered-illustration-78455-1862.jpg" alt="" />
            <div className="absolute flex justify-center transform -translate-y-2/3  my-auto ">

                <div className="w-1/2 -translate-y-1/2">
                    <h1 className="text-center text-3xl font-bold text-pink-400 ">Add a Toy</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="flex  w-full">
                            <input className="w-full rounded p-3  h-8 m-3 "  {...register("seller", { required: true })}
                                placeholder="Seller" type="text" defaultValue={user?.displayName} />
                            <input className="w-full rounded p-3  h-8 m-3 "  {...register("email", { required: true })}
                                placeholder="Email" type="text" defaultValue={user?.email} />
                        </div>
                        <div className="flex  w-full">
                            <input className="w-full rounded p-3  h-8 m-3 "  {...register("toyName", { required: true })}
                                placeholder="Toy Name" type="text" defaultValue={toyName} />
                            <input className="w-full rounded p-3   h-8 m-3"  {...register("price", { required: true })}
                                placeholder="Price" type="text" defaultValue={price} />
                        </div>
                        <select className="w-full  rounded  h-8 m-3" {...register("subCategory")} >
                            <option value="frozenDolls">Frozen Dolls</option>
                            <option value="disneyPrincess">Disney Princess</option>
                            <option value="mickeyMouseDolls">Mickey Mouse Dolls</option>
                        </select>

                        <input className="w-full rounded p-3   h-8 m-3" {...register("availableQuantity", { required: true })}
                            placeholder="Available Quantity" type="text" defaultValue={availableQuantity} />
                        <input className="w-full rounded p-3   h-8 m-3" {...register("photoURL", { required: true })}
                            placeholder="Photo URL" type="text" defaultValue={photoURL} />

                        <input className="w-full rounded p-3   h-8 m-3" {...register("rating", { required: true })}
                            placeholder="Rating" type="text" defaultValue={rating} />
                        <input className="w-full rounded p-3 h-8 m-3" {...register("detailDescription", { required: true })}
                            placeholder="Detail Description" type="text" defaultValue={detailDescription} />

                        <input className="btn rounded my-5 ml-3 w-full btn-outline hover:border-sky-200 hover:bg-sky-300 bg-sky-200" type="submit" value='Submit' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToyModal;