import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {

    const [counts, setCounts] = useState({
        members: 0,
        vehicles: 0,
        projects: 0,
        customers: 0,
    });

    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                }
            },
            { threshold: 0.4 } // Trigger when 40% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!startCounting) return;

        const targets = {
            members: 30,
            vehicles: 8,
            projects: 6000,
            customers: 5000,
        };

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let currentStep = 0;

        const counter = setInterval(() => {
            currentStep++;
            setCounts({
                members: Math.floor((targets.members / steps) * currentStep),
                vehicles: Math.floor((targets.vehicles / steps) * currentStep),
                projects: Math.floor((targets.projects / steps) * currentStep),
                customers: Math.floor((targets.customers / steps) * currentStep),
            });

            if (currentStep >= steps) clearInterval(counter);
        }, interval);

        return () => clearInterval(counter);
    }, [startCounting]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: "ease-in-out", // Easing function
            once: false, // Whether animation should happen only once
        });
    }, []);

    const images = [
        "/assets/Frame 766.png",
        "/assets/Frame 767.png" // add your second image here
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
        cssEase: "ease-in-out",
    };

    const customers = [
        "/assets/customer/3b78a1_9cdd224ba9494e03b6a585e9eb2dbe40~mv2.jpg",
        "/assets/customer/9eadea566976652792e2a199c039880a.png",
        "/assets/customer/72c194f3e3dbb31ca73b4dc1d3362a26.jpg",
        "/assets/customer/1631328697966.jpg",
        "/assets/customer/Axis_Capstone_Construction_Pvt._Ltd..jpg",
        "/assets/customer/Badge_of_the_Indian_Air_Force.png",
        "/assets/customer/Bangalore Nirmithi Kendra(Urban).png",
        "/assets/customer/bharat-electronics-limited-logo-hd.webp",
        "/assets/customer/Bruhat_Bengaluru_Mahanagara_Palike_logo.jpg",
        "/assets/customer/concept-city-developers-bangalore-pf6r2.avif",
        "/assets/customer/g39hbw4v.jpg",
        "/assets/customer/godrej-properties-logo-png_seeklogo-495528.png",
        "/assets/customer/govianu_wealth_management_private_limited_logo.jpg",
        "/assets/customer/images (1).png",
        "/assets/customer/images copy.png",
        "/assets/customer/images.png",
        "/assets/customer/jdc6ynbjse9i9znxdo9s.avif",
        "/assets/customer/L970266-20150701153113.jpg",
        "/assets/customer/Legacy-NCC-1.jpg",
        "/assets/customer/Logo_home.png",
        "/assets/customer/logo-1.png",
        "/assets/customer/logo.webp",
        "/assets/customer/mfar-constructions.png",
        "/assets/customer/newlogo.png",
        "/assets/customer/official_rhd_logo.jpg",
        "/assets/customer/Pristine-Homes-Quotation.docx-1-2.png",
        "/assets/customer/uniquebuildssconstruction_logo.jpg",

    ];
    return (
        <>
            <section className="relative w-full h-screen flex items-center justify-start overflow-hidden -top-20 md:-top-46 -z-10">
                {/* Background Slider */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-screen object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Overlay above all images */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>

                {/* Text Content */}
                <div className="relative z-10 max-w-xl px-6 md:px-16 text-left text-white mt-16 md:mt-0" data-aos="fade-right">
                    <h1
                        className="text-3xl md:text-4xl md:whitespace-nowrap"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        High-volume concrete supply and civil project
                    </h1>
                    <h1
                        className="text-3xl md:text-4xl leading-snug mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        delivery across Bengaluru
                    </h1>
                    <p className="text-lg md:text-base mb-6 md:whitespace-nowrap">
                        — M7.5 to M60, 24/7 plant capability, trusted by BEL, Indian Airforce & BBMP.
                    </p>
                    <button className="bg-[#FFB91E] hover:bg-yellow-600 text-black font-semibold px-6 py-3 mt-6 rounded-lg transition-all">
                        Explore More
                    </button>
                </div>
            </section>
            <section className="w-full flex flex-col md:flex-row items-center justify-between overflow-hidden md:-mt-40">
                {/* Left Side - Image (visible only on desktop) */}
                <div
                    className="hidden md:flex w-full md:w-1/2 justify-start items-center"
                    data-aos="fade-right"
                >
                    <img
                        src="/assets/Work 1.png"
                        alt="Work Illustration"
                        className="w-3/4 h-auto object-cover"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div
                    className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-8 text-[#213C58]"
                    data-aos="fade-left"
                >
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
                    >
                        WELCOME TO our company
                    </h2>

                    {/* Image shown only on mobile below heading */}
                    <div className="flex justify-center mb-4 md:hidden">
                        <img
                            src="/assets/Work 1.png"
                            alt="Work Illustration"
                            className="w-3/4 h-auto object-cover"
                        />
                    </div>

                    <p
                        className="text-base md:text-lg mb-6 leading-relaxed text-center md:text-left"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        At Sri Lakshmi Narasimha Swamy Concrete (SLNS), we deliver high-quality Ready-Mix Concrete (M7.5–M60)
                        with precision, strength, and reliability.
                        <br />Founded in 2022, we’ve become one of Bengaluru’s trusted concrete suppliers, serving leading
                        clients like BEL, BBMP, and the Indian Airforce.
                        <br />With a 75 m³/hour batching plant and 24/7 operations, we ensure on-time delivery and superior
                        quality for every project.
                    </p>

                    <button
                        className="bg-[#FFB91E] hover:bg-yellow-600 text-[#16283B] font-semibold px-6 py-3 rounded-lg transition-all w-fit mx-auto md:mx-0"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        Know More
                    </button>
                </div>
            </section>

            <section className="relative w-full flex items-center justify-center overflow-hidden my-10 md:my-0">
                {/* Background Image */}
                <img
                    src="/assets/Concrete Texture 1.png"
                    alt="Team Work"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#203a56]/90"></div>

                {/* Stats Content */}
                <div
                    ref={sectionRef}
                    className="relative flex flex-col items-center justify-center text-white px-4 py-16 min-h-screen md:min-h-[60vh]"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        <div>
                            <h2 className="text-5xl text-[#FFB91E] font-bold mb-2">
                                {counts.customers}+
                            </h2>
                            <p
                                className="text-lg"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
                            >
                                Customers
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl text-[#FFB91E] font-bold mb-2">
                                {counts.projects}+
                            </h2>
                            <p
                                className="text-lg"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
                            >
                                Projects
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl text-[#FFB91E] font-bold mb-2">
                                {counts.vehicles}+
                            </h2>
                            <p
                                className="text-lg"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
                            >
                                Vehicles
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl text-[#FFB91E] font-bold mb-2">
                                {counts.members}+
                            </h2>
                            <p
                                className="text-lg"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400 }}
                            >
                                Members
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full pb-5 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                        style={{ fontFamily: "'bebas Neue', sans-serif", fontWeight: 400 }}
                    >
                        Our Customers
                    </h2>

                    {/* Logo Marquee */}
                    <div className="overflow-hidden relative">
                        <div className="marquee flex whitespace-nowrap">
                            {[...customers, ...customers].map((logo, index) => (
                                <div key={index} className="shrink-0 mx-8">
                                    <img
                                        src={logo}
                                        alt={`Customer ${index + 1}`}
                                        className="h-16 md:h-20 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pure CSS animation */}
                <style>
                    {`
      .marquee {
        display: flex;
        width: max-content;
        animation: marquee 50s linear infinite;
      }

      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
                </style>
            </section>





        </>
    );
};

export default Home;
