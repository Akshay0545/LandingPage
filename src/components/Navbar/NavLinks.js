import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-800 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-800 hover:text-blue-900" smooth to="/#blogs">
                Blogs
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-800 hover:text-blue-900" to="/contact#contact">
                Contact
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-800 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <Link to="/join-us" className="text-white bg-blue-700 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl">
                Join Us
            </Link>
        </>
    );
};

export default NavLinks;
