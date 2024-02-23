import { useEffect, useState } from 'react';
import './navbar.css'
import Logo from '/logo.png'
import { IoIosCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Model from '../Model/Model';
import { useContext } from "react"
import { UserContext } from "../../../context/UserContext.jsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';







function Navbar() {
    const navigate = useNavigate()
    const { user, setLoading } = useContext(UserContext)
    const [userProfile, setUserProfile] = useState()


    if (user) {
        const getProfileImage = async () => {
            try {
                await axios.get(`/profile-image/${user.id}`
                ).then((response) => {
                    if (response.data == null) {
                        const defaultImage = "./src/profiles/testimonial1.png"
                        setUserProfile(defaultImage)
                    } else {
                        const imageData = response.data.file;
                        const file = `./src/profiles/${imageData}`
                        setUserProfile(file)
                    }
                }).catch((e) => {
                    console.log(e)
                });

            } catch (error) {
                console.log(error);
            }
        }

        getProfileImage()
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSticky, setSticky] = useState(false)

    useEffect((() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }), [])

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };


    const navItem = <>
        <li className="nav-item">
            <a className="nav-link active me-3" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown me-3">
            <a
                className={`nav-link dropdown-toggle ${activeDropdown === 'menu' ? 'rotate' : ''}`}
                href="/menu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={activeDropdown === 'menu'}
                onClick={() => toggleDropdown('menu')}
            >
                Menu
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 'menu' ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="/menu">All</a></li>
                <li><a className="dropdown-item" href="#">Salad</a></li>
                <li><a className="dropdown-item" href="#">Pizza</a></li>
            </ul>
        </li>
        <li className="nav-item dropdown me-3">
            <a
                className={`nav-link dropdown-toggle ${activeDropdown === 'service' ? 'rotate' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={activeDropdown === 'service'}
                onClick={() => toggleDropdown('service')}
            >
                Service
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 'service' ? 'show' : ''}`}>
                <li><a className="dropdown-item" href="#">Online Order</a></li>
                <li><a className="dropdown-item" href="#">Table Booking</a></li>
                <li><a className="dropdown-item" href="#">Order Take</a></li>
            </ul>
        </li>
        <li className="nav-item me-3">
            <a className="nav-link" href="#">Offers</a>
        </li>
    </>
    const [state, setState] = useState({ right: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const items = [
        { text: 'Profile', icon: <FaUser /> },
        { text: 'Starred', icon: <MailIcon />, route: '/starred' },
        { text: 'Send email', icon: <InboxIcon />, route: '/send-email' },
        { text: 'Logout', icon: <MailIcon /> }
    ];

    const list = (anchor) => (



        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {items.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => handleItemClick(item)} // Add onClick event handler
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );

    const handleItemClick = async (value) => {


        // Logout
        if (value.text === "Logout") {
            await axios.get('/logout')
                .then(() => {
                    setLoading(true)
                    window.location.reload()
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log("No value");
        }

        //Profile
        if (value.text === "Profile") {
            navigate("/profile")

        } else {
            console.log("No value");
        }
    }




    return (
        <header>
            <nav className={`navbar navbar-expand-md bg-body-tertiary sticky-top position-fixed top-0 start-0 end-0 ${isSticky ? "bg-white shadow" : ""}`}>
                <div className="container-lg ">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto mb-lg-0">
                            {navItem}
                        </ul>
                        <form className="d-flex align-items-center gap-3" role="search" onSubmit={handleForm}>
                            <FiSearch className='custom__icon' />
                            <div className="shopping-cart">
                                <IoIosCart className='custom__icon icon__cart' />
                                <span className="cart-value">5</span>
                            </div>
                            {
                                !user ? <Model /> : <React.Fragment key={"right"}>
                                    <Button className="d-flex align-items-center gap-3" onClick={toggleDrawer("right", true)}>

                                        <img src={user ? userProfile : "./src/profiles/testimonial1.png"} alt="" className='w-100' style={{ height: "50px", borderRadius: "50%" }} />
                                    </Button>
                                    <Drawer
                                        anchor={"right"}
                                        open={state["right"]}
                                        onClose={toggleDrawer("right", false)}
                                    >
                                        {list("right")}
                                    </Drawer>
                                </React.Fragment>

                            }

                        </form>

                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
