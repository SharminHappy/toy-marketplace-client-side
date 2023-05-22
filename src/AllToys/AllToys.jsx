

import AllToysTable from "./AllToysTable";
import { useEffect, useState } from "react";


const AllToys = () => {

    // const loadData = useLoaderData();
    const [toy, setToy] = useState([]);
    const [search, setSearch] = useState('')
    const [limit,setLimit]=useState(0);

    // loadData.map((a) => {
    //     let x = a.price;
    //     return 0;

        // x=x.replace('$','');
        // x=parseFloat(x);
        // a.price=x;
        // return a;
        // console.log(typeof (x));
    // })

    // loadData.sort((a,b)=>{
    //     // a.price-b.price
    //     let x=a.price.replace('$','')
    //     let y=b.price.replace('$','')
    //     x=parseFloat(a)
    //     y=parseFloat(b)
    //     let z;
    //     if(x-y<0){
    //         // return a.price
    //     }
    //     return x-y;
    // })
    const handleLimit=(event)=>{
        event.preventDefault();
        const limitValue =event.target.limit.value;
        setLimit(limitValue);

    }
   
    useEffect(()=>{
        fetch(`http://localhost:5000/toys?limit=${limit}`)
        .then(res=>res.json())
        .then(data=>setToy(data))
    },[limit])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByToyName/${search}`)
            .then(res => res.json())
            .then(data => {
                setToy(data)
            })

    }

   
    return (
        
        <div>
            <div className="search-box p-2 text-center w-1/2 flex gap-3 mx-auto my-4">
                <input
                    onChange={(e) => setSearch(e.target.value)} 
                    
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
                ></input>{''}
                <button onClick={handleSearch} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <div>
                <form onSubmit={handleLimit} className="flex w-40" >
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " type="text" name="limit"  />
                    <button className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"type="submit">Limit</button>
                    
                </form>
            </div>
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
                            toy.map(data => <AllToysTable
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