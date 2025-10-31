import React from 'react'
import LeftImage from '/assets/download (15) 1.png';
import RightImage from '/assets/download (15) 2.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="w-full overflow-x-hidden">

            {/* ---------- Section 1: Images Left & Right, Text Center ---------- */}
            <section className="relative w-full flex flex-row items-stretch justify-between gap-4 px-0">
                {/* Left Image */}
                <div className="w-1/3 flex items-center" >
                    <div className="w-full min-h-28 md:min-h-72 rounded-lg overflow-hidden h-full" data-aos="fade-right">
                        <img src={LeftImage} alt="Left" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Center Text */}
                <div className="w-1/3 flex items-center justify-center text-center">
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl text-[#FFB91E]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        data-aos="fade-up">
                        About Us
                    </h2>
                </div>

                {/* Right Image */}
                <div className="w-1/3 flex items-center">
                    <div className="w-full min-h-28 md:min-h-72 rounded-lg overflow-hidden h-full" data-aos="fade-left">
                        <img src={RightImage} alt="Right" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>




            {/* ---------- Section 2: Blended Background with Paragraph ---------- */}
            <section className="relative w-full py-6 md:py-12 flex items-center justify-center" data-aos="fade-up">
                <img
                    src="/assets/Concrete Texture 2.png"
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#434343]/90"></div>
                <div className="relative z-10 text-center px-6 md:px-20 py-10 text-white">
                    <p className="text-base md:text-xl leading-relaxed"
                        style={{ fontFamily: "'Sora', sans-serif" }}>
                        Established in May 2022, SLNS Concrete has rapidly grown into one of Bengaluru’s most trusted RMC suppliers, serving over 5,000 customers and completing 6,000+ projects. With a team of 30+ skilled professionals, we deliver precision, punctuality, and long-term durability in every project. We proudly serve high-profile clients such as BEL, BBMP, and the Indian Airforce. Our support services include full project documentation, Work Inspection Reports (WIRs), Non-Conformance Reports (NCRs), and testing records — ensuring full transparency and client satisfaction. Backed by strong logistics, advanced machinery, and dedicated teamwork, SLNS continues to build the foundations of tomorrow’s infrastructure.
                    </p>
                </div>
            </section>

            {/* ---------- Section 3: Image with Text Overlay (Our Vision) ---------- */}
            <section className="relative w-full" data-aos="fade-up">
                {/* Background Image with Overlay */}
                <div className="relative w-full h-[400px] md:h-[500px]">
                    <img
                        src="/assets/about.png"
                        alt="Vision"
                        className="w-full h-full object-cover md:object-center object-top"
                    />
                    <div className="absolute inset-0 md:bg-black/40"></div>
                </div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-20">
                    <h3
                        className="text-3xl md:text-5xl font-bold mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        OUR VISION
                    </h3>
                    <p
                        className="text-base md:text-lg leading-relaxed max-w-2xl"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        To be the leading and most trusted partner in India's industrial and
                        infrastructure development, setting the benchmark for project delivery
                        and operational excellence.
                    </p>
                </div>
            </section>



            {/* ---------- Section 4: Text on Left/Right (Our Mission) ---------- */}
            <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gray-50" data-aos="fade-up">
                {/* Left Text */}
                <div className="md:w-1/3 text-left mb-6 md:mb-0">
                    <h3
                        className="text-2xl md:text-4xl mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        Our Mission
                    </h3>
                </div>

                {/* Right Paragraph */}
                <div className="md:w-2/3 text-left">
                    <p className="text-base md:text-lg leading-relaxed text-gray-700"
                        style={{ fontFamily: "'Sora', sans-serif" }}>
                        SLNS is committed to delivering high-quality, time-bound, and complex projects across the corporate and government sectors. We leverage our robust infrastructure, experienced team, and dynamic partnership to ensure reliable and efficient service to our 5000+ customers.
                    </p>
                </div>
            </section>

            <section className="w-full bg-[#16283B] py-2 px-6 md:px-12 flex justify-center">
                <h2
                    className="text-2xl md:text-4xl text-[#FFB91E] text-center"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    Our Certifications
                </h2>
            </section>


            <section className="w-full bg-white py-12 px-6 md:px-12">
                {/* ---- CERTIFICATION SECTION ---- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    {/* 1️⃣ Quality Management System */}
                    <div className="flex items-center space-x-6">
                        <img
                            src="/assets/Group.png"
                            alt="ISO 9001 Logo"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#213C58]">
                                2015
                                Quality Management System
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Certificate No: Q-0110242795<br />
                                Ensures end-to-end quality control in batching, testing, and delivery operations.
                            </p>
                        </div>
                    </div>

                    {/* 2️⃣ Occupational Health & Safety Management */}
                    <div className="flex items-center space-x-6">
                        <img
                            src="/assets/iso.png"
                            alt="ISO 45001 Logo"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#213C58]">
                                Occupational Health & Safety Management
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Certificate No: GMP-011024225<br />
                                Certified for workplace safety and compliance with international standards.
                            </p>
                        </div>
                    </div>

                    {/* 3️⃣ Quality Council of India */}
                    <div className="flex items-center space-x-6">
                        <img
                            src="/assets/qci.png"
                            alt="QCI Logo"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#213C58]">
                                Quality Council of India
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Under Active Implementation<br />
                                National-level certification validating our RMC quality assurance system and project reliability.
                            </p>
                        </div>
                    </div>

                    {/* 4️⃣ Environmental Management System */}
                    <div className="flex items-center space-x-6">
                        <img
                            src="/assets/iso1.png"
                            alt="ISO 14001 Logo"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#213C58]">
                                Environmental Management System
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                Certificate No: EMS-011024293<br />
                                Certified for sustainable and environmentally responsible operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---- FOUR CARDS SECTION ---- */}
                {/* Desktop View (unchanged) */}
                <div className="hidden md:grid grid-cols-4 gap-6 px-12">
                    {[
                        { title: "RELIABILITY", icon: "/assets/bg1.png" },
                        { title: "QUALITY ASSURANCE", icon: "/assets/bg2.png" },
                        { title: "PARTNERSHIP", icon: "/assets/bg3.png" },
                        { title: "SCALABILITY.", icon: "/assets/bg4.png" },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center overflow-hidden shadow-md transition-transform duration-500 hover:scale-105"
                            style={{
                                backgroundImage: "url('/assets/Concrete Texture 8.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "250px",
                                width: "90%", // rectangle width
                            }}
                        >
                            {/* Overlay (color) */}
                            <div className="absolute inset-0 bg-[#434343]/85"></div>

                            {/* Content (icon + title) */}
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-10 md:w-14 mb-8 object-contain"
                                />
                                <h4
                                    className="text-sm md:text-2xl text-white tracking-wide text-center"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {card.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View (2 per row, different background) */}
                <div className="grid grid-cols-2 md:hidden w-full gap-0">
                    {[
                        { title: "RELIABILITY", icon: "/assets/bg1.png" },
                        { title: "QUALITY ASSURANCE", icon: "/assets/bg2.png" },
                        { title: "PARTNERSHIP", icon: "/assets/bg3.png" },
                        { title: "SCALABILITY.", icon: "/assets/bg4.png" },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center overflow-hidden w-full transition-transform duration-500 hover:scale-105"
                            style={{
                                backgroundImage: "url('/assets/Concrete Texture 8.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "200px",
                            }}
                        >
                            <div className="absolute inset-0 bg-[#434343]/95"></div>
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-14 mb-6 object-contain"
                                />
                                <h4
                                    className="text-md text-white tracking-wide text-center"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                >
                                    {card.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>






            </section>


        </div>
    )
}

export default About
