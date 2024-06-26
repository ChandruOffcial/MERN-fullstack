import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Profile from "../components/Profile/Profile";





const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        children: [{
            path: '/',
            element: <Home />
        }, {
            path: '/menu',
            element: <PrivateRouter><Menu /></PrivateRouter>
        }, {
            path: '/profile',
            element: <Profile />
        }
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },
]);

export default router