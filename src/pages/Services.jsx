import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
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
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Two Column Image & Cards Section */}
      <section className="flex flex-col lg:flex-row min-h-screen pt-16">
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <img src="/assets/Cement.png" alt="Ready Mix Concrete" className="object-cover w-full h-[85vh]" />

          {/* Overlay Cards */}
          <div className="absolute -bottom-12 left-0 right-0 z-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Quality Card */}
              <motion.div
                className="relative text-white p-6 shadow-xl rounded-xl overflow-hidden min-h-[260px] hover:scale-[1.04] hover:shadow-2xl transition-all duration-500"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img src="/assets/cards bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#F9B233] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>QUALITY</h3>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• Cube casting, curing, and 7-day/28-day strength testing</li>
                    <li>• Daily raw material testing (cement, sand, aggregates, water)</li>
                    <li>• Slump test before every delivery</li>
                    <li>• Documentation of test results for client transparency</li>
                  </ul>
                </div>
              </motion.div>

              {/* On-Site Delivery Card */}
              <motion.div
                className="relative text-white p-6 shadow-xl rounded-xl overflow-hidden min-h-[260px] hover:scale-[1.04] hover:shadow-2xl transition-all duration-500"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <img src="/assets/cards bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#F9B233] flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>ON-SITE DELIVERY</h3>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed">
                    <li>• 24/7 concrete supply and pouring</li>
                    <li>• Fleet of 8+ company vehicles</li>
                    <li>• Trained staff for night and continuous pour operations</li>
                    <li>• GPS-enabled tracking for dispatch and delivery efficiency</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center py-16 px-8 lg:px-16">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            READY MIXED CONCRETE
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg mb-8 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We specialize in manufacturing and supplying high-quality Ready-Mix Concrete (RMC)
            for all types of construction needs — from small residential projects to large-scale
            government and industrial works. Our mixes range from M7.5 to M60.
          </motion.p>
          <motion.button
            className="bg-[#F9B233] text-black px-8 py-3 font-semibold hover:bg-yellow-400 shadow-lg transition-colors mb-8 w-fit"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            CONTACT US
          </motion.button>
        </div>
      </section>

      {/* Machine Capability Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-left mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Machine Capability
            </h2>
            <p className="text-gray-600 max-w-4xl">
              Our 2-acre production facility in Byappanhalli Village, Yelahanka Taluk, Bengaluru
              houses advanced, high-volume equipment designed for precision and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machineCards.map((card, i) => (
              <motion.div
                key={i}
                className="relative text-white p-6 shadow-xl rounded-xl overflow-hidden min-h-80 flex flex-col justify-between hover:scale-[1.04] hover:shadow-2xl transition-all duration-500"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.2, type: 'spring', stiffness: 80 }}
              >
                <img src="/assets/cards bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4 uppercase text-[#F9B233]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{card.title}</h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-white grow">
                    {card.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
