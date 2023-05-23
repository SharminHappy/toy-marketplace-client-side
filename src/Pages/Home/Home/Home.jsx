import Categorys from "../../Categorys/Categorys";
import NewArrival from "../../NewArrival/NewArrival";
import Banner from "../Banner/Banner";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Categorys></Categorys>
           <NewArrival></NewArrival>

        </div>
    );
};

export default Home;