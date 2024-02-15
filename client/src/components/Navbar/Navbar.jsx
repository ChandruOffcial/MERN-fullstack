import { useEffect, useState } from 'react';
import './navbar.css'
import Logo from '/logo.png'
import { FiPhoneCall } from "react-icons/fi";
import { IoIosCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

function Navbar() {
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
                        <form className="d-flex align-items-center gap-3" role="search">
                            <FiSearch className='custom__icon' />
                            <div className="shopping-cart">
                                <IoIosCart className='custom__icon icon__cart' />
                                <span className="cart-value">5</span>
                            </div>
                            <button className="btn btn-outline-success d-flex align-items-center gap-3" type="submit"><FiPhoneCall />Contact</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
