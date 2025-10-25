import React from 'react'

const Services = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/Frame 106.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 flex h-full">
                    {/* Left side - empty for image */}
                    <div className="w-1/2"></div>

                    {/* Right side - Content overlay */}
                    <div className="w-1/2 flex items-center justify-center p-8">
                        <div className="text-white max-w-lg">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                READY MIXED CONCRETE
                            </h1>
                            <div className="w-16 h-1 bg-[#F5B400] mb-6"></div>

                            <p className="text-lg mb-4 leading-relaxed">
                                We specialize in manufacturing and supplying high-quality Ready-Mix Concrete (RMC) for all types of construction needs — from small residential projects to large-scale government and industrial works.
                            </p>

                            <p className="text-lg mb-8 leading-relaxed">
                                Our mixes range from M7.5 to M60, including both nominal and design mixes, tailored to meet structural and durability requirements.
                            </p>

                            <button className="bg-[#F5B400] text-black px-8 py-3 font-semibold hover:bg-yellow-300 transition-colors">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Quality Card */}
                        <div className="bg-[#C2C2C2] text-black p-8 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#F5B400] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">QUALITY</h3>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li>• Cube casting, curing, and 7-day/28-day strength testing</li>
                                <li>• Daily raw material testing (cement, sand, aggregates, water)</li>
                                <li>• Slump test before every delivery</li>
                                <li>• Documentation of test results for client transparency</li>
                            </ul>
                        </div>

                        {/* On-site Delivery Card */}
                        <div className="bg-[#C2C2C2] text-black p-8 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#F5B400] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">ON-SITE DELIVERY</h3>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li>• 24/7 concrete supply and pouring</li>
                                <li>• Fleet of 8+ company vehicles</li>
                                <li>• Trained staff for night and continuous pour operations</li>
                                <li>• GPS-enabled tracking for dispatch and delivery efficiency</li>
                            </ul>
                        </div>

                        {/* Logistic & Support Card */}
                        <div className="bg-[#C2C2C2] text-black p-8 rounded-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#F5B400] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">LOGISTIC & SUPPORT</h3>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li>• Same-day and next-day dispatch scheduling</li>
                                <li>• 2-hour dispatch target from batching to site arrival</li>
                                <li>• Yard inventory management for materials</li>
                                <li>• Real-time updates and documentation for clients</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Machine Capability Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Machine Capability</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Our 2-acre production facility in Byappanhalli Village, Yelahanka Taluk, Bengaluru houses advanced, high-volume equipment designed for precision and reliability. Every machine is maintained under strict SOPs to support 24/7 plant operations and the "Quick Service" delivery model.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Core Infrastructure Card */}
                        <div className="bg-[#C2C2C2] text-black p-6 rounded-lg relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <h3 className="text-xl font-bold mb-4">CORE INFRASTRUCTURE</h3>
                            <ul className="space-y-3 text-sm">
                                <li>• Batching Plant Capacity: 75 m³/hour (Conmat Concrete Machinery - Industrial-grade unit) Enables continuous, high-volume concrete production for large-scale projects.</li>
                                <li>• Plant Automation: Electronic calibration and digital control systems for design and nominal mixes (M7.5-M60).</li>
                                <li>• Operation Mode: 24-hour production cycle with night-shift QC and safety supervision.</li>
                            </ul>
                        </div>

                        {/* Fleet & Logistics Card */}
                        <div className="bg-[#C2C2C2] text-black p-6 rounded-lg relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <h3 className="text-xl font-bold mb-4">FLEET & LOGISTICS</h3>
                            <ul className="space-y-3 text-sm">
                                <li>• 8+ Transit Mixers equipped with GPS tracking for real-time monitoring.</li>
                                <li>• Concrete Pumps (3 units) for on-site placement and foundation works.</li>
                                <li>• Dedicated Cement Silos and Water Tankers ensuring uninterrupted batching.</li>
                                <li>• Rapid Dispatch SOP: Material loading and departure within 2 hours of request.</li>
                            </ul>
                        </div>

                        {/* Testing & Quality Card */}
                        <div className="bg-[#C2C2C2] text-black p-6 rounded-lg relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <h3 className="text-xl font-bold mb-4">TESTING & QUALITY</h3>
                            <ul className="space-y-3 text-sm">
                                <li>• Compressive Strength Testing Machine (CTM)</li>
                                <li>• Slump Test Apparatus</li>
                                <li>• Cube Moulds & Curing Tanks (7-day and 28-day strength checks)</li>
                                <li>• Digital Weighing Systems & Sieve Analysis Setup for precise material calibration.</li>
                            </ul>
                        </div>

                        {/* Power & Support Card */}
                        <div className="bg-[#C2C2C2] text-black p-6 rounded-lg relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F5B400]"></div>
                            <h3 className="text-xl font-bold mb-4">POWER & SUPPORT</h3>
                            <ul className="space-y-3 text-sm">
                                <li>• Backup Generators for continuous power supply</li>
                                <li>• Loaders, Conveyors, and Weighbridges for aggregate and cement handling</li>
                                <li>• Inventory Management System ensuring efficient material tracking and dispatch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services