import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/Frame 106.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="md:relative fixed top-0 left-0 md:px-6 w-full z-50 bg-linear-to-l from-black/90 via-black/20 to-transparent text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
                {/* Logo */}
                <div className="cursor-pointer -mt-6">
                    <img src={logo} alt="Logo" className="h-18 md:h-24 object-contain" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-md" style={{ fontFamily: "'sora', sans-serif" }}>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative px-4 py-2 transition hover:text-gray-300 ${location.pathname === link.path
                                ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-yellow-400"
                                : ""
                                }`}
                        >
                            {link.name}
                            {/* Hover underline animation */}
                            <span
                                className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-400 transition-all duration-300 ${location.pathname === link.path
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                    }`}
                            ></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* ✅ Mobile Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-gray-100/95 backdrop-blur-sm 
                     px-6 pb-4 space-y-4 text-center text-lg z-40 shadow-lg transition-all duration-300"
                >
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 transition text-gray-900 hover:text-gray-700 ${location.pathname === link.path
                                ? "border-b-2 border-yellow-400 font-medium"
                                : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
