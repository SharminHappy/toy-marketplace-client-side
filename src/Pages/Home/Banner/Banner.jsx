

const Banner = () => {
    return (
        <div className="carousel  rounded  ">
            <div id="slide1" className="carousel-item relative w-full h-3/4">
                <img src="https://i.ibb.co/87jmY8v/6361307-sd.jpg" className=" carousel-item relative w-full h-3/4" />
                <div className="absolute flex justify-between transform -translate-y-1/2  left-11  top-1/2">
                    <div className=" w-32 mx-5">
                        <h1 className=" text-7xl text-center text-bold text-sky-200 ">DISNEY PRINCESS DOLLS</h1>
                        <button className="btn btn-outline  text-white bg-pink-400 px-2 w-32 mt-3 hover:bg-pink-500">SEE MORE</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide4" className=" text-6xl text-pink-500 my-auto ">❮</a>
                    <a href="#slide2" className=" text-6xl text-pink-500 my-auto ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-3/4">
                <img src="https://i.ibb.co/TrvdJbL/disneystore-limitededitionfrozendolls-91956489-e1411633843577.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2  left-11  top-1/2">
                    <div className=" w-32 mx-5">
                        <h1 className=" text-7xl text-center text-bold text-sky-200 ">FROZEN DOLLS</h1>
                        <button className="btn btn-outline  text-white bg-pink-400 px-2 w-32 mt-3  hover:bg-pink-500">SEE MORE</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-6xl text-pink-500 my-auto ">❮</a>
                    <a href="#slide3" className="text-6xl text-pink-500 my-auto ">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;