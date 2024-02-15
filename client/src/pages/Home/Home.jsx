import Banner from "../../components/Banner/Banner"
import SpecialDishes from "./SpecialDishes/SpecialDishes"
import { Catagories } from "./catagories/Catagories"
import Services from "./services/Services"
import Testimonial from "./testimonial/Testimonial"



const Home = () => {
    return (
        <div>
            <Banner />
            <Catagories />
            <SpecialDishes />
            <Testimonial />
            <Services />
        </div>
    )
}

export default Home
