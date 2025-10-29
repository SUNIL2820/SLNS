import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // make sure lucide-react is installed
import logo from '/assets/Frame 106.png'; // replace with your logo path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="top-0 left-0 z-50 w-full bg-[#213C58] text-white md:px-6">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Image */}
                <div className="cursor-pointer relative">
                    <img src={logo} alt="Logo" className="h-20 md:h-26 object-contain z-9999" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-12 text-lg ">
                    <a href="/" className="hover:text-gray-300 transition">Home</a>
                    <a href="/services" className="hover:text-gray-300 transition">Services</a>
                    <a href="/about" className="hover:text-gray-300 transition">About Us</a>
                    <a href="/gallery" className="hover:text-gray-300 transition">Gallery</a>
                    <a href="/contact" className="hover:text-gray-300 transition">Contact Us</a>
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
                <div className="md:hidden bg-[#213C58] backdrop-blur-sm px-6 pb-4 space-y-4 text-center text-lg">
                    <a href="/" className="block hover:text-gray-300 transition">Home</a>
                    <a href="/services" className="block hover:text-gray-300 transition">Services</a>
                    <a href="/about" className="block hover:text-gray-300 transition">About Us</a>
                    <a href="/gallery" className="block hover:text-gray-300 transition">Gallery</a>
                    <a href="/contact" className="block hover:text-gray-300 transition">Contact Us</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
