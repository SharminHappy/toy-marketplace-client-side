import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext);



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        console.log(data);
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="  mx-auto my-auto p-11 ">
            <img className="w-full" src="https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237231.jpg?w=740&t=st=1684474312~exp=1684474912~hmac=697b08c0fce8b0dd824680b9b3cbea3156ee71711aa5bc18d374eba8d8f7da18" alt="" />
            <div className="absolute flex justify-center transform -translate-y-2/3  my-auto ">

                <div className="w-1/2 -translate-y-1/2">
                    <h1 className="text-center text-3xl font-bold text-pink-400 font-serif">Add a Toy</h1>
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
                                placeholder="Toy Name" type="text" />
                            <input className="w-full rounded p-3   h-8 m-3"  {...register("price", { required: true })}
                                placeholder="Price" type="text" />
                        </div>
                        <select className="w-full  rounded  h-8 m-3" {...register("subCategory")}>
                            <option value="frozenDolls">Frozen Dolls</option>
                            <option value="disneyPrincess">Disney Princess</option>
                            <option value="mickeyMouseDolls">Mickey Mouse Dolls</option>
                        </select>

                        <input className="w-full rounded p-3   h-8 m-3" {...register("availableQuantity", { required: true })}
                            placeholder="Available Quantity" type="text" />
                        <input className="w-full rounded p-3   h-8 m-3" {...register("photoURL", { required: true })}
                            placeholder="Photo URL" type="text" />

                        <input className="w-full rounded p-3   h-8 m-3" {...register("rating", { required: true })}
                            placeholder="Rating" type="text" />
                        <input className="w-full rounded p-3   h-8 m-3" {...register("detailDescription", { required: true })}
                            placeholder="Detail Description" type="text" />

                        <input className="btn rounded my-5 ml-3 w-full btn-outline hover:border-info hover:bg-info bg-blue-200" type="submit" value='Submit' />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddToy;