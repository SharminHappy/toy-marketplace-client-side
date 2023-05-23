import Categorys from "../../Categorys/Categorys";
import Gallery from "../../Gallary/Gallery";
import NewArrival from "../../NewArrival/NewArrival";
import Banner from "../Banner/Banner";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
           <Categorys></Categorys>
           <NewArrival></NewArrival>

        </div>
    );
};

export default Home;