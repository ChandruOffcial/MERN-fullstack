import Banner from "../../components/Banner/Banner"
import SpecialDishes from "./SpecialDishes/SpecialDishes"
import { Catagories } from "./catagories/Catagories"
import Testimonial from "./testimonial/Testimonial"



const Home = () => {
    return (
        <div>
            <Banner />
            <Catagories />
            <SpecialDishes />
            <Testimonial />
        </div>
    )
}

export default Home
