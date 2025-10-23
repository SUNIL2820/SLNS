import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#213C58] text-white px-6 md:px-8 py-10 relative">
            {/* ===== Top Section (Mobile Only) ===== */}
            <div className="flex justify-between items-start mb-6 md:hidden">
                {/* Phone & Email (Left) */}
                <div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span className="text-sm text-gray-200">+91 9945434932</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-yellow-400" />
                        <span className="text-sm text-gray-200">
                            sales@ainsconcrete.com
                        </span>
                    </div>
                </div>

                {/* Social Icons (Right) */}
                <div className="flex flex-col items-center space-y-3">
                    <a href="#" className="hover:text-yellow-400">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* ===== Main Grid Section ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Head Office */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">HEAD OFFICE</h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        Survey Number 104/4A, Byappanhalli Village, Jalahobli, <br />
                        Yelahanka Taluk, Bengaluru - 560064
                    </p>

                    {/* Desktop Phone & Email */}
                    <div className="hidden md:flex items-center gap-2 mt-4">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span className="text-sm text-gray-200">+91 9945434932</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-yellow-400" />
                        <span className="text-sm text-gray-200">
                            sales@ainsconcrete.com
                        </span>
                    </div>
                </div>

                {/* Our Services */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">OUR SERVICES</h2>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>Ready Mix Concrete</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="relative">
                    <h2 className="text-lg font-semibold mb-4">LEGAL</h2>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                        <li>Support</li>
                    </ul>

                    {/* Social Icons (Desktop Only) */}
                    <div className="hidden md:flex flex-col items-center space-y-4 absolute right-0 top-0">
                        <a href="#" className="hover:text-yellow-400">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-500 mt-8 mb-4"></div>

            {/* Bottom Text */}
            <div className="text-center text-sm text-gray-300">
                © 2025{" "}
                <span className="text-yellow-400 font-semibold">
                    Dev Creations and Solutions.
                </span>{" "}
                All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
