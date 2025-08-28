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
            initial={{ opacity: 0, y: -50 }}       
            animate={{ opacity: 1, y: 0 }}        
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
                <h2 className="btn btn-ghost text-2xl">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_308_29)">
                            <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_308_29">
                                <rect width="36" height="36" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    Positivus</h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex-nowrap">
                    {links}
                </ul>
            </div>

        </motion.div>
    )
}

export default Navbar
