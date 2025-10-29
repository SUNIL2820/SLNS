import React from 'react'
import LeftImage from '/assets/download (15) 1.png';
import RightImage from '/assets/download (15) 2.png';

const About = () => {
    return (
        <div className="w-full overflow-x-hidden">

            {/* ---------- Section 1: Images Left & Right, Text Center ---------- */}
            <section className="relative w-full flex flex-col md:flex-row items-center justify-between">
                {/* Left Image */}
                <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
                    <img
                        src={LeftImage}
                        alt="Left"
                        className="w-[90%] md:w-full h-60 md:h-[80%] object-cover rounded-lg"
                    />
                </div>

                {/* Center Text */}
                <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                    <h2
                        className="text-4xl md:text-6xl text-[#FFB91E] mb-4"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        About Us
                    </h2>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/3 flex justify-center items-center">
                    <img
                        src={RightImage}
                        alt="Right"
                        className="w-[90%] md:w-full h-60 md:h-[80%] object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* ---------- Section 2: Blended Background with Paragraph ---------- */}
            <section className="relative w-full py-16 flex items-center justify-center">
                <img
                    src="/assets/Concrete Texture 2.png"
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#434343]/90"></div>
                <div className="relative z-10 text-center px-6 md:px-20 py-10 text-white">
                    <p className="text-base md:text-xl leading-relaxed">
                        Established in May 2022, SLNS Concrete has rapidly grown into one of Bengaluru’s most trusted RMC suppliers, serving over 5,000 customers and completing 6,000+ projects. With a team of 30+ skilled professionals, we deliver precision, punctuality, and long-term durability in every project. We proudly serve high-profile clients such as BEL, BBMP, and the Indian Airforce. Our support services include full project documentation, Work Inspection Reports (WIRs), Non-Conformance Reports (NCRs), and testing records — ensuring full transparency and client satisfaction. Backed by strong logistics, advanced machinery, and dedicated teamwork, SLNS continues to build the foundations of tomorrow’s infrastructure.
                    </p>
                </div>
            </section>

            {/* ---------- Section 3: Image with Text Overlay (Our Vision) ---------- */}
            <section className="relative w-full flex items-center justify-center py-0 px-4 md:px-0">
                <img
                    src="/assets/about.png"
                    alt="Vision"
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 text-white text-center md:text-left px-6 md:px-20">
                    <div className="md:w-1/3">
                        <h3
                            className="text-2xl md:text-3xl font-bold mb-2"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                            Our Vision
                        </h3>
                    </div>
                    <div className="md:w-1/3">
                        <p className="text-base md:text-lg leading-relaxed">
                            To be the leading and most trusted partner in India's industrial and infrastructure development, setting the benchmark for project delivery and operational excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Section 4: Text on Left/Right (Our Mission) ---------- */}
            <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gray-50">
                {/* Left Text */}
                <div className="md:w-1/3 text-left mb-6 md:mb-0">
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        Our Mission
                    </h3>
                </div>

                {/* Right Paragraph */}
                <div className="md:w-2/3 text-left">
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        SLNS is committed to delivering high-quality, time-bound, and complex projects across the corporate and government sectors. We leverage our robust infrastructure, experienced team, and dynamic partnership to ensure reliable and efficient service to our 5000+ customers.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
