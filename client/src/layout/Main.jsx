import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext.jsx"

import CircularIndeterminate from "../components/Loader/Loder.jsx"


const Main = () => {
    const { loading } = useContext(UserContext)

    return (
        <div>
            {
                loading ? <CircularIndeterminate /> : <><Navbar />
                    <div style={{ minHeight: '100vh' }}>

                        <Outlet />
                    </div>
                    <Footer /></>
            }

        </div>
    )
}

export default Main
