import Banner from "../../components/Banner/Banner"
import SpecialDishes from "./SpecialDishes/SpecialDishes"
import { Catagories } from "./catagories/Catagories"



const Home = () => {
    return (
        <div>
            <Banner />
            <Catagories />
            <SpecialDishes />
        </div>
    )
}

export default Home
