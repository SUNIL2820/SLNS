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
            <div className="flex justify-between items-start mb-0 md:mb-6 md:hidden">

                {/* Phone & Email (Left) */}
                <div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span className="text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            +91 9945434932
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-yellow-400" />
                        <span className="text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            sales@ainsconcrete.com
                        </span>
                    </div>
                </div>

                {/* Social Icons (Right - Mobile) */}
                <div className="flex flex-col items-center space-y-5">
                    <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>

            {/* ===== Main Grid Section ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Head Office */}
                <div>
                    <h2
                        className="text-lg  mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                    >
                        HEAD OFFICE
                    </h2>
                    <p
                        className="text-xs md:text-sm leading-relaxed text-gray-200"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Survey Number 104/4A, Byappanhalli Village, Jalahobli, <br />
                        Yelahanka Taluk, Bengaluru - 560064
                    </p>

                    {/* Desktop Phone & Email */}
                    <div className="hidden md:flex items-center gap-2 mt-4">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span className="text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            +91 9945434932
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 mt-2">
                        <FaEnvelope className="text-yellow-400" />
                        <span className="text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            sales@ainsconcrete.com
                        </span>
                    </div>
                </div>

                {/* Our Services */}
                <div>
                    <h2
                        className="text-lg  mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                    >
                        OUR SERVICES
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <li>Ready Mix Concrete</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h2
                        className="text-lg  mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                    >
                        COMPANY
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="relative">
                    <h2
                        className="text-lg  mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                    >
                        LEGAL
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                        <li>Support</li>
                    </ul>

                    {/* Social Icons (Desktop Only) */}
                    <div className="hidden md:flex flex-col items-center space-y-6 absolute right-0 top-0">
                        <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                            <FaFacebookF size={22} />
                        </a>
                        <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                            <FaTwitter size={22} />
                        </a>
                        <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                            <FaInstagram size={22} />
                        </a>
                        <a href="#" className="text-yellow-400 hover:text-white transition duration-300">
                            <FaLinkedinIn size={22} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-500 mt-8 mb-4"></div>

            {/* Bottom Text */}
            <div
                className="text-center text-sm text-gray-300"
                style={{ fontFamily: "'sora', sans-serif" }}
            >
                © {new Date().getFullYear()}{" "}
                <a
                    href="https://devcreationsblr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                >
                    Dev Creations and Solutions
                </a>
                . All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
