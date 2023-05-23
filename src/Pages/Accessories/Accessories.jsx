

const Accessories = () => {
    return (
        <div className="mx-3 my-10">
            <h1 className="text-3xl text-sky-200 font-bold text-center mb-20 mt-8">CLOTH AND ACCESSORIES FOR YOUR DOOLS</h1>
            <div className="grid lg:grid-cols-3  gap-10 ">
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
                    <figure><img src="https://i.ibb.co/Vwp18Rs/Doll-Accessories-Clothes-Jewelry-Luggage-Suitcase-Dollar-Mini-Plastic-Toiletries-Computer-for-11-5-i.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dolls Cloths & Complements</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline  text-white bg-pink-300 px-4  hover:bg-pink-500">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
                    <figure><img className="h-96" src="https://i.ibb.co/9g14CCt/515j1e-Sk9-NL-SY355.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dolls Cupboard</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline  text-white bg-pink-300 px-4  hover:bg-pink-500">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
                    <figure><img src="https://i.ibb.co/Rjs5FzB/R2783550-40.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">Dolls  Params</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline  text-white bg-pink-300 px-4  hover:bg-pink-500">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;