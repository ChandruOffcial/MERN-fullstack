import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext.jsx"




const Main = () => {
    const { loading } = useContext(UserContext)

    return (
        <div>
            {
                loading ? "Loading" : <><Navbar />
                    <div style={{ minHeight: '100vh' }}>

                        <Outlet />
                    </div>
                    <Footer /></>
            }

        </div>
    )
}

export default Main
