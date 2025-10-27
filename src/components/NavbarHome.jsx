import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '/assets/Frame 106.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="top-0 left-0 md:px-6 w-full z-50 bg-linear-to-l from-black/90 via-black/20 to-transparent text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
                {/* Logo */}
                <div className="cursor-pointer -mt-6">
                    <img src={logo} alt="Logo" className="h-16 md:h-24 object-contain" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <a href="/" className="relative px-4 py-2 hover:text-gray-300 transition">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
                    </a>
                    <a href="/services" className="relative px-4 py-2 hover:text-gray-300 transition">
                        Services
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
                    </a>
                    <a href="/about" className="relative px-4 py-2 hover:text-gray-300 transition">
                        About Us
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
                    </a>
                    <a href="/gallery" className="relative px-4 py-2 hover:text-gray-300 transition">
                        Gallery
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
                    </a>
                    <a href="/contact" className="relative px-4 py-2 hover:text-gray-300 transition">
                        Contact Us
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white backdrop-blur-sm px-6 pb-4 space-y-4 text-center text-lg">
                    <a href="/" className="block px-4 py-2 hover:text-gray-700 transition">Home</a>
                    <a href="/services" className="block px-4 py-2 hover:text-gray-700 transition">Services</a>
                    <a href="/about" className="block px-4 py-2 hover:text-gray-700 transition">About Us</a>
                    <a href="/gallery" className="block px-4 py-2 hover:text-gray-700 transition">Gallery</a>
                    <a href="/contact" className="block px-4 py-2 hover:text-gray-700 transition">Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
