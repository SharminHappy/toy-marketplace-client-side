import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory/SingleCategory";



const Categorys = () => {

    const [toys, setToys] = useState([])

    const [activeTab, setActiveTab] = useState('all');


    useEffect(() => {

        fetch(`https://toy-marketplace-server-chi-mocha.vercel.app/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)

            })
    }, [activeTab]);
    const handleTab = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className="text-center m-11">
            <h1 className="text-3xl text-sky-200 font-bold">SHOP BY CATEGORY</h1>
            <p className=" text-gray-400">It is every little girl  dream to have an exact look-alike doll. It is amazing.</p>
            <div className="tab-container text-center mt-10">
                <div className="text-center w-100 ml-80">
                    <div className="tabs">
                        <div onClick={() => handleTab('frozenDolls')} className={`tab tab2 tab3 tab-lifted text-xl   frozenDolls  ${activeTab == 'frozenDolls' ? 'bg-pink-300 text-white' : ""}`}>
                            Frozen Dolls
                        </div>
                        <div onClick={() => handleTab('disneyPrincess')} className={`tab tab2 tab3  tab-lifted text-xl tab-active  disneyPrincess  ${activeTab == 'disneyPrincess' ? 'text-pink-300' : ""}`}>
                            Disney princess
                        </div>
                        <div onClick={() => handleTab('mickeyMouseDolls')} className={`tab tab2 tab3   tab-lifted  text-xl    mickeyMouseDolls ${activeTab == 'mickeyMouseDolls' ? 'bg-pink-300 text-white' : ""}`}>
                            Mickey mouse dolls
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-2 my-10 ">

                {
                    toys?.map(toy => <SingleCategory
                        key={toy._id}
                        toy={toy}
                    >
                    </SingleCategory>)
                }
            </div>
            

        </div>
    );
};

export default Categorys;