import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {

    const links = <>
        <li><a>About us</a></li>
        <li><a >Services</a></li>
        <li><a>Use Cases</a></li>
        <li><a>Blog</a></li>
        <li><a>Prices</a></li>
        <li className='border rounded-lg '><a>Request a quote</a></li>
    </>
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}       // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }}        // Fade in and slide to position
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar  py-8 top-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h2 className="btn btn-ghost text-2xl">Positivus</h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

        </motion.div>
    )
}

export default Navbar
