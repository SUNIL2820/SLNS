import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="w-full  mb-10 px-6 md:py-12 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-equal">
                    {/* Left Form */}
                    <div className="flex flex-col">
                        <h2 className="text-5xl md:text-6xl font-medium text-[#213C58] mb-4 font-bebas"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            CONTACT US
                        </h2>

                        <p className="text-[#213C58] font-extralight mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>
                            Get in touch with us for any
                            <span className="block">enquiries and questions</span>
                        </p>
                        <form
                            className="flex flex-col gap-4"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                            onSubmit={(e) => {
                                e.preventDefault(); // prevent default reload
                                const form = e.target;
                                const name = form[0].value;
                                const email = form[1].value;
                                const address = form[2].value;

                                const subject = encodeURIComponent("Contact Form Submission");
                                const body = encodeURIComponent(
                                    `Name: ${name}\nEmail: ${email}\nAddress: ${address}`
                                );

                                window.location.href = `mailto:sales@slnsconcrete.com?subject=${subject}&body=${body}`;
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="md:w-3/4 border-b md:border-b-2 border-[#FFB91E] focus:border-yellow-500 outline-none py-4" required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="md:w-3/4 border-b md:border-b-2 border-[#FFB91E] focus:border-yellow-500 outline-none py-4" required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                className="md:w-3/4 border-b md:border-b-2 border-[#FFB91E] focus:border-yellow-500 outline-none py-4" required
                            />
                            <button
                                type="submit"
                                className="bg-[#FFB91E] text-xs text-black font-normal py-3 px-8 mt-4 w-max hover:bg-yellow-600 transition-colors mx-auto md:mx-0 block"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Right Contact Info + Map */}
                    <div className="flex flex-col gap-6" >
                        {/* Contact Info */}
                        <div className="flex flex-col md:flex-row md:justify-between gap-8 text-center" style={{ fontFamily: "'Sora', sans-serif" }}>
                            {/* CALL US */}
                            <div className="flex flex-col items-center">
                                <img
                                    src="/assets/callus.png"
                                    alt="Call Us"
                                    className="w-14 h-16 mb-3"
                                />
                                <p className="font-semibold text-gray-800 md:text-xs whitespace-nowrap">+91-9945434932</p>
                            </div>

                            {/* VISIT US */}
                            <div className="flex flex-col items-center">
                                <img
                                    src="/assets/visitus.png"
                                    alt="Visit Us"
                                    className="w-14 h-16 mb-3"
                                />
                                <p className="font-semibold text-gray-800 md:text-xs max-w-xs">
                                    Survey Number 104/4, Byappanahalli Village, Jalahalli, Yelahanka Taluk, Bengaluru – 560064
                                </p>
                            </div>

                            {/* CONTACT US */}
                            <div className="flex flex-col items-center">
                                <img
                                    src="/assets/contactus.png"
                                    alt="Contact Us"
                                    className="w-18 h-16 mb-3"
                                />
                                <p className="font-semibold text-gray-800 md:text-xs">sales@slnsconcrete.com</p>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border-2 border-[#FFB91E] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1713.6956963916732!2d77.58539381049509!3d13.098156510191947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae185851a10f83%3A0x7a7b0f25e96ecd57!2sBhoomi%20Digital%20Survey%20Tech!5e0!3m2!1sen!2sin!4v1761375063031!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact
