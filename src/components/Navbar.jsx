import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/assets/Frame 106.png"; // adjust path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // ✅ Get current URL path

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white md:bg-[#213C58] text-white md:px-6 md:shadow-lg">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <div className="cursor-pointer relative">
                    <img src={logo} alt="Logo" className="h-20 object-contain" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-12 text-md"
                    style={{ fontFamily: "'sora', sans-serif" }}>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative transition hover:text-gray-300 ${location.pathname === link.path ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#FFB91E]" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={28} color="black" /> : <Menu size={28} color="black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#213C58] backdrop-blur-sm px-6 pb-4 space-y-4 text-center text-lg z-40">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block transition hover:text-gray-300 ${location.pathname === link.path ? "border-b-2 border-yellow-400 pb-1" : ""
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
