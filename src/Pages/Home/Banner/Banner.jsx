

const Banner = () => {
    return (
        <div className="carousel my-5 rounded">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/young-asian-teen-plugging-energy-signal-cable-sensor-chip-toy-car-workshop_112554-257.jpg?w=740" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className=" text-6xl text-white my-auto ">❮</a>
                    <a href="#slide2" className=" text-6xl text-white my-auto ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/front-view-child-boy-white-t-shirt-playing-vr-segway-blue-space_179666-923.jpg?w=740&t=st=1684360418~exp=1684361018~hmac=07bd6c7b35d14252c24f7f3ac9fc551473e8468dd8e6d8ffb82207451942d7be" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-6xl text-white my-auto ">❮</a>
                    <a href="#slide3" className="text-6xl text-white my-auto ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/young-girl-trying-out-drone-while-young-girl-is-working-using-laptop_23-2149357741.jpg?w=740&t=st=1684361220~exp=1684361820~hmac=c63bc7fd06cc561b985120a109feb3e13efbb602c3b907716ab608245989bb0d" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-6xl text-white my-auto ">❮</a>
                    <a href="#slide4" className="text-6xl text-white my-auto ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/father-son-making-robot_23-2148863348.jpg?w=826&t=st=1684361416~exp=1684362016~hmac=e18d6aeaf06cc0ac769d8f656e7a0f075226f2463edac8e93fe2b9c15fd33311" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="text-6xl text-white my-auto ">❮</a>
                    <a href="#slide5" className="text-6xl text-white my-auto ">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/kid-little-girl-program-code-robot-with-laptop-computer-boy-test-with-remote-control_143683-4064.jpg?w=740" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-6xl text-white my-auto ">❮</a>
                    <a href="#slide6" className="text-6xl text-white my-auto ">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/side-view-boy-playing-video-games-with-virtual-reality-headset_23-2148556166.jpg?w=740&t=st=1684361995~exp=1684362595~hmac=ec26b7869265e800de8a49f7cd80f907b8d1bc2678a594974388d0cd8e470a74" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="text-6xl text-white my-auto ">❮</a>
                    <a href="#slide1" className="text-6xl text-white my-auto ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;