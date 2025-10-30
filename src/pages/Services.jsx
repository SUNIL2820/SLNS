import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const machineCards = [
    {
      title: "CORE INFRASTRUCTURE",
      points: [
        "Batching Plant Capacity: 75 m³/hour (Conmat Concrete Machinery - Industrial-grade unit)",
        "Plant Automation: Electronic calibration & control systems (M7.5–M60).",
        "Operation Mode: 24-hour production cycle with shift QC supervision.",
      ],
    },
    {
      title: "FLEET & LOGISTICS",
      points: [
        "8+ Transit Mixers equipped with GPS tracking.",
        "Concrete Pumps (3 units) for on-site foundation work.",
        "Dedicated Cement Silos & Water Tankers for uninterrupted batching.",
        "Rapid Dispatch SOP: Departure within 2 hours of request.",
      ],
    },
    {
      title: "TESTING & QUALITY",
      points: [
        "Compressive Strength Testing Machine (CTM)",
        "Slump Test Apparatus",
        "Cube Moulds & Curing Tanks (7-day and 28-day strength checks)",
        "Digital Weighing Systems & Sieve Analysis Setup for precise calibration.",
      ],
    },
    {
      title: "POWER & SUPPORT",
      points: [
        "Backup Generators for continuous power supply",
        "Loaders, Conveyors, and Weighbridges for handling materials",
        "Inventory Management System for efficient tracking and dispatch",
      ],
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800 scroll-smooth">

      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row min-h-[90vh] mt-4">
        {/* LEFT IMAGE WITH OVERLAYS */}
        <div className="relative w-full lg:w-[60%]">
          <img
            src="/assets/Cement.png"
            alt="Ready Mix Concrete"
            className="object-cover w-full h-[80vh]"
          />
        </div>

        {/* RIGHT: Ready Mixed Concrete Text */}
        <div className="w-full lg:w-1/2 bg-white relative min-h-[80vh] py-2 px-8 lg:px-16" data-aos="fade-up">
          <h1
            className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="underline decoration-[#F9B233] underline-offset-4">READY MIXED</span> CONCRETE
          </h1>
          <p className="text-black text-lg mb-6 leading-relaxed">
            We specialize in manufacturing and supplying high-quality Ready-Mix Concrete (RMC)
            for all types of construction needs — from small residential projects to large-scale
            government and industrial works. Our mixes range from M7.5 to M60.
          </p>
          <Link to="/contact" className="inline-block">
            <button className="bg-[#FFB91E] text-black px-8 py-3 font-semibold shadow-lg w-fit transition-all duration-300 ease-out hover:shadow-yellow-400/70 hover:shadow-2xl">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>

      {/* Row of three cards */}
      <div className="w-full px-6 mt-16 md:-mt-[212px]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Quality */}
          <div className="relative bg-white text-white p-6 shadow-xl overflow-hidden w-[354px] h-[367px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#F9B233] hover:ring-offset-2" data-aos="zoom-in">
            <img
              src="/assets/card bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
            <div className="relative z-10">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <img src="/assets/Quality.png" alt="" className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>QUALITY</h3>
              </div>
              <ul className="space-y-2 text-base leading-relaxed text-white/80" style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}>
                <li>• Cube casting, curing, and 7-day/28-day strength testing</li>
                <li>• Daily raw material testing (cement, sand, aggregates, water)</li>
                <li>• Slump test before every delivery</li>
                <li>• Documentation of test results for client transparency</li>
              </ul>
            </div>
          </div>

          {/* On-Site */}
          <div className="relative bg-white text-white p-6 shadow-xl overflow-hidden w-[354px] h-[367px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#F9B233] hover:ring-offset-2" data-aos="zoom-in">
            <img
              src="/assets/card bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
            <div className="relative z-10">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <img src="/assets/On-site.png" alt="" className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>ON-SITE DELIVERY</h3>
              </div>
              <ul className="space-y-2 text-base leading-relaxed text-white/80" style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}>
                <li>• 24/7 concrete supply and pouring</li>
                <li>• Fleet of 8+ company vehicles</li>
                <li>• Trained staff for night and continuous pour operations</li>
                <li>• GPS-enabled tracking for dispatch and delivery efficiency</li>
              </ul>
            </div>
          </div>

          {/* Logistic */}
          <div className="relative bg-white text-white p-6 shadow-xl overflow-hidden w-[354px] h-[367px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#F9B233] hover:ring-offset-2" data-aos="zoom-in">
            <img
              src="/assets/card bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
            <div className="relative z-10">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <img src="/assets/Logistic.png" alt="" className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>LOGISTIC & SUPPORT</h3>
              </div>
              <ul className="space-y-2 text-base leading-relaxed text-white/80" style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}>
                <li>• Same-day and next-day dispatch scheduling</li>
                <li>• 2-hour dispatch target from batching to site arrival</li>
                <li>• Yard inventory management for materials</li>
                <li>• Real-time updates and documentation for clients</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ================= Machine Capability Section ================= */}
      <section className="py-24 bg-white" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="underline decoration-[#F9B233] underline-offset-4">Machine Capa</span>bility
            </h2>
            <p
              className="text-gray-900 max-w-4xl"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500 }}
            >
              Our 2-acre production facility in Byappanhalli Village, Yelahanka Taluk, Bengaluru
              houses advanced, high-volume equipment designed for precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machineCards.map((card, i) => (
              <div
                key={i}
                className="relative text-white p-6 shadow-xl rounded-x0 overflow-hidden min-h-80 flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#F9B233] hover:ring-offset-2"
                data-aos="zoom-in"
              >
                <img
                  src="/assets/card bg.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-70 filter contrast-150"
                />
                <div className="relative z-10 flex flex-col h-full">
                  <h3
                    className="text-2xl font-bold mb-4 uppercase text-[#F9B233] text-center"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-white grow">
                    {card.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
