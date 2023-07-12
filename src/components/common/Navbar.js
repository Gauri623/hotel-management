import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const linkData = [
    { index: 0, name: "home", link: "/" },
    { index: 1, name: "about", link: "/about" },
    { index: 2, name: "gallery", link: "/gallery" },
    { index: 3, name: "destination", link: "/destination" },
    { index: 4, name: "blogs", link: "/blogs" },
    { index: 5, name: "testimonail", link: "/testimonail" },
    { index: 6, name: "contact", link: "/contact" },
    { index: 8, name: "image", link: "/image" },
]

const navigateData = [
    { index: 0, name: "Working Hours", value: "Monday - Sunday: 9.00am to 6.00pm", icon: "far fa-clock" },
    { index: 1, name: "Call Us Hours", value: "+011 123 4567", icon: "fa-solid fa-phone-volume" },
    { index: 2, name: "Mail Us", value: "info@example.com", icon: "fa-regular fa-envelope" },
]
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [activePage, setActivePage] = useState("");
    const location = useLocation()

    useEffect(() => {
        const pathname = location.pathname.split("/");
        setActivePage(pathname[1] || "")
    }, [location])

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!false);
    return (
        <>
            <nav className='navbar'>
                <div className='container flex_space'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas-fa-bars'}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : 'nav-menu'}>
                        {linkData.map((item, index) => {
                            const { name, link } = item
                            console.log(name, activePage, name === activePage);
                            return <li key={index} >
                                <Link className={`${name === activePage || (name === "home" && activePage === "") ? "navbar-item active" : "navbar-item"}`} to={`${link}`} onClick={closeMobileMenu}>{name}</Link>
                            </li>
                        })}
                    </ul >
                    <div className='login-area flex'>
                        <li>
                            <Link href='/sign-in'>
                                <i className="input">Sign In</i>
                            </Link>
                        </li>
                        <li>
                            <Link href='/register'>
                                <i className="output">Register</i>
                            </Link>
                        </li>
                        <li>
                            <button
                                className="primary-btn">Request a Quote
                            </button>
                        </li>
                    </div>
                </div >
            </nav >

            <header>
                <div className="container flex_space">
                    <div className="logo">
                        <img src="/hotel.png" alt="Hotel Logo" />
                    </div>

                    {navigateData.map((item, index) => {
                        const { name, value, icon } = item
                        return <div key={index} className="contact flex_space">
                            <div className="box flex_space"></div>
                            <div className='icons'>
                                <i className={icon}></i>
                            </div>
                            <div className='text'>
                                <h4>{name}</h4>
                                <Link to=''>{value}</Link>
                            </div>
                        </div>
                    })}
                </div>
            </header >
        </>
    )
}

export default Navbar
