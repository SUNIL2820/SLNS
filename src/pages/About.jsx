import React from 'react';
import LeftImage from '/assets/download (15) 1.png';
import RightImage from '/assets/download (15) 2.png';
import OverlayImage from '/assets/Concrete Texture 2 (1).png';

const About = () => {
    return (
        <>
            {/* About Us Section */}
            <div className="relative w-full h-screen flex items-start justify-center overflow-hidden bg-white">

                {/* Left Image */}
                <img
                    src={LeftImage}
                    alt="Left"
                    className="absolute left-0 top-1/3 transform -translate-y-1/2 h-[80%] object-cover"
                />

                {/* Right Image */}
                <img
                    src={RightImage}
                    alt="Right"
                    className="absolute right-0 top-1/3 transform -translate-y-1/2 h-[80%] object-cover"
                />

                {/* Centered Text */}
                <h1
                    className="text-6xl md:text-8xl text-[#FFB91E] z-10 text-center absolute top-1/3 transform -translate-y-1/2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    ABOUT US
                </h1>
            </div>

            {/* Overlay Section */}
            <div className="relative w-full flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <img
                    src={OverlayImage}
                    alt="Overlay Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Gray Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
                    <p className="text-lg md:text-2xl text-white max-w-3xl leading-relaxed">
                        Established in May 2022, SLNS Concrete has rapidly grown into one of Bengaluru’s most trusted RMC suppliers, serving over 5,000 customers and completing 6,000+ projects. With a team of 30+ skilled professionals, we deliver precision, punctuality, and long-term durability in every project. We proudly serve high-profile clients such as BEL, BBMP, and the Indian Airforce. Our support services include full project documentation, Work Inspection Reports (WIRs), Non-Conformance Reports (NCRs), and testing records — ensuring full transparency and client satisfaction. Backed by strong logistics, advanced machinery, and dedicated teamwork, SLNS continues to build the foundations of tomorrow’s infrastructure.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
