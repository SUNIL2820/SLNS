import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 bg-linear-to-l from-black/80 via-black/60 to-transparent text-white"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide cursor-pointer">
                    <span className="text-white">MyLogo</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-lg">
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
                <div className="md:hidden bg-white backdrop-blur-sm px-6 pb-4 space-y-4 text-center text-lg">
                    <a href="/" className="block hover:text-gray-300 transition">Home</a>
                    <a href="/services" className="block hover:text-gray-300 transition">Services</a>
                    <a href="/about" className="block hover:text-gray-300 transition">About Us</a>
                    <a href="/gallery" className="block hover:text-gray-300 transition">Gallery</a>
                    <a href="/contact" className="block hover:text-gray-300 transition">Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
