import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';


const PrivateRouter = ({ children }) => {
    const { user } = useContext(UserContext)
    const location = useLocation()
    if (user) {
        return children
    }

    return (
        <Navigate to='/signup' state={{ From: location }} replace></Navigate>
    )
}

export default PrivateRouter


PrivateRouter.propTypes = {
    children: PropTypes.node.isRequired
};