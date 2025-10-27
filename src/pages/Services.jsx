import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const machineData = [
    {
      title: "CORE INFRASTRUCTURE",
      points: [
        "Batching Plant Capacity: 75 m³/hour (Conmat Concrete Machinery - Industrial-grade unit)",
        "Plant Automation: Electronic calibration & digital control systems for design and nominal mixes (M7.5–M60).",
        "Operation Mode: 24-hour production cycle with shift-wise QC and safety supervision.",
      ],
    },
    {
      title: "FLEET & LOGISTICS",
      points: [
        "8+ Transit Mixers equipped with GPS tracking for real-time monitoring.",
        "Concrete Pumps (3 units) for on-site placement and foundation works.",
        "Dedicated Cement Silos and Water Tankers ensuring uninterrupted batching.",
        "Rapid Dispatch SOP: Material loading and departure within 2 hours of request.",
      ],
    },
    {
      title: "TESTING & QUALITY",
      points: [
        "Compressive Strength Testing Machine (CTM)",
        "Slump Test Apparatus",
        "Cube Moulds & Curing Tanks (7-day and 28-day strength checks)",
        "Digital Weighing Systems & Sieve Analysis Setup for precise material calibration.",
      ],
    },
    {
      title: "POWER & SUPPORT",
      points: [
        "Backup Generators for continuous power supply",
        "Loaders, Conveyors, and Weighbridges for aggregate and cement handling",
        "Inventory Management System ensuring efficient material tracking and dispatch",
      ],
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800 scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row min-h-[90vh]">
        {/* LEFT IMAGE WITH OVERLAYS */}
        <div className="relative w-full lg:w-[60%]">
          <img
            src="/assets/Cement.png"
            alt="Ready Mix Concrete"
            className="object-cover w-full h-[90vh]"
          />

          {/* Overlay Cards */}
          <div className="absolute -bottom-16 left-0 right-0 z-20 px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Quality Card */}
              <div className="relative text-gray-100 p-6 shadow-xl rounded-none overflow-hidden min-h-[280px]">
                <img
                  src="/assets/cards bg.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-95"
                />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#F9B233] flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-medium uppercase text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 500 }}
                    >
                      Quality
                    </h3>
                  </div>
                  <ul
                    className="space-y-2 text-sm leading-relaxed"
                    style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}
                  >
                    <li>• Cube casting, curing, and 7-day/28-day strength testing</li>
                    <li>• Daily raw material testing (cement, sand, aggregates, water)</li>
                    <li>• Slump test before every delivery</li>
                    <li>• Documentation of test results for client transparency</li>
                  </ul>
                </div>
              </div>

              {/* On-site Delivery Card */}
              <div className="relative text-gray-100 p-6 shadow-xl rounded-none overflow-hidden min-h-[280px]">
                <img
                  src="/assets/cards bg.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-95"
                />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#F9B233] flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-medium uppercase text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 500 }}
                    >
                      On-Site Delivery
                    </h3>
                  </div>
                  <ul
                    className="space-y-2 text-sm leading-relaxed"
                    style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}
                  >
                    <li>• 24/7 concrete supply and pouring</li>
                    <li>• Fleet of 8+ company vehicles</li>
                    <li>• Trained staff for night and continuous pour operations</li>
                    <li>• GPS-enabled tracking for dispatch and delivery efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full lg:w-[40%] bg-white flex flex-col justify-center py-16 px-8 lg:px-16">
          <h1
            className="text-5xl font-semibold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
          >
            READY MIXED CONCRETE
          </h1>
          <p
            className="text-gray-700 text-lg mb-8 leading-relaxed"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500 }}
          >
            We specialize in manufacturing and supplying high-quality Ready-Mix Concrete (RMC)
            for all types of construction needs — from small residential projects to large-scale
            government and industrial works. Our mixes range from M7.5 to M60, including both
            nominal and design mixes, tailored to meet structural and durability requirements.
          </p>
          <button className="bg-[#F9B233] text-black px-8 py-3 font-semibold shadow-lg mb-8 w-fit hover:bg-[#eaa92a] transition">
            CONTACT US
          </button>

          {/* Logistics Card aligned with other two (visually) */}
          <div className="relative text-gray-100 p-6 shadow-xl rounded-none overflow-hidden min-h-[280px] -mt-8">
            <img
              src="/assets/cards bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#F9B233] flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-medium uppercase text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 500 }}
                >
                  Logistics & Support
                </h3>
              </div>
              <ul
                className="space-y-2 text-sm leading-relaxed"
                style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}
              >
                <li>• Same-day and next-day dispatch scheduling</li>
                <li>• 2-hour dispatch target from batching to site arrival</li>
                <li>• Yard inventory management for materials</li>
                <li>• Real-time updates and documentation for clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MACHINE CAPABILITY SECTION */}
      <section className="py-24 bg-white scroll-smooth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-12">
            <h2
              className="text-4xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            >
              Machine Capability
            </h2>
            <p
              className="text-gray-700 max-w-4xl"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500 }}
            >
              Our 2-acre production facility in Byappanhalli Village, Yelahanka Taluk, Bengaluru
              houses advanced, high-volume equipment designed for precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machineData.map((card, i) => (
              <div
                key={i}
                className="relative text-gray-100 p-6 shadow-xl rounded-none overflow-hidden min-h-80"
              >
                <img
                  src="/assets/cards bg.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="relative z-10 h-full flex flex-col">
                  <h3
                    className="text-xl font-medium mb-4 uppercase text-[#F9B233]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 500 }}
                  >
                    {card.title}
                  </h3>
                  <ul
                    className="space-y-3 text-sm leading-relaxed text-gray-100"
                    style={{ fontFamily: "'AG MB3 Body', sans-serif", fontWeight: 500 }}
                  >
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
