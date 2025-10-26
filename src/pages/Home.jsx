import React from "react";

const Home = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-start overflow-hidden -top-20">
            {/* Background Image */}
            <img
                src="/assets/Frame 766.png" // change to your path
                alt="Concrete Plant"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay blend */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-xl px-6 md:px-16 text-left text-white mt-16 md:mt-0">
                <h1 className="text-3xl md:text-4xl whitespace-nowrap"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    High-volume concrete supply and civil project
                </h1>
                <h1 className="text-3xl md:text-4xl leading-snug mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    delivery across Bengaluru
                </h1>
                <p className="text-lg md:text-base mb-6 whitespace-nowrap">
                    — M7.5 to M60, 24/7 plant capability, trusted by BEL, Indian Airforce & BBMP.
                </p>
                <button className="bg-[#FFB91E] hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-all">
                    Explore More
                </button>
            </div>
        </section>
    );
};

export default Home;
