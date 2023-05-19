import { useEffect, useState } from "react";


const Categorys = () => {
    const [categorys, setCategorys] = useState([]);
    const [activeTab, setActiveTab] = useState('disney princes');

    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>{
            setCategorys(data)
        })
    },[])

    const handleTab = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className="text-center m-11">
            <h1 className="text-3xl">SHOP BY CATEGORY</h1>
            <p>It is every little girl's dream to have an exact look-alike doll. It is amazing.</p>
            <div className="tab-container text-center mt-10">
                <div className="text-center w-100 ml-80">
                    <div className="tabs">
                        <div onClick={() => handleTab('frozen dolls')} className={`tab tab2 tab3 tab-lifted text-xl   frozen dolls  ${activeTab == 'frozen dolls' ? 'bg-pink-700 text-white' : ""}`}>
                            Frozen Dolls
                        </div>
                        <div onClick={() => handleTab('disney princes')} className={`tab tab2 tab3  tab-lifted text-xl tab-active  disney princes  ${activeTab == 'disney princes' ? 'text-pink-700' : ""}`}>
                            Disney princes
                        </div>
                        <div onClick={() => handleTab('donald duck')} className={`tab tab2 tab3   tab-lifted  text-xl    donald duck  ${activeTab == 'donald duck' ? 'bg-pink-700 text-white' : ""}`}>
                            donald duck
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* {
                    categorys?.map(category=><All)
                } */}
            </div>
        </div>

    );
};

export default Categorys;