import React from 'react'

const Contact = () => {
    return (
        <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Left Form */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">CONTACT US</h2>
                    <p className="text-gray-600 mb-8">
                        Get in touch with us for any enquiries and questions
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white font-semibold py-2 px-6 mt-4 w-max hover:bg-yellow-600 transition-colors"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>

                {/* Right Contact Info + Map */}
                <div className="flex flex-col gap-6">
                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                        <div className="flex items-center gap-2 text-yellow-500">
                            <span className="text-2xl">📞</span>
                            <div>
                                <p className="text-sm">CALL US</p>
                                <p className="font-semibold text-gray-800">+91-9945434932</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-500">
                            <span className="text-2xl">📍</span>
                            <div>
                                <p className="text-sm">VISIT US</p>
                                <p className="font-semibold text-gray-800 text-sm">
                                    Survey Number 104/4, Byappanahalli Village, Jalahalli, Yelahanka Taluk, Bengaluru – 560064
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-500">
                            <span className="text-2xl">✉️</span>
                            <div>
                                <p className="text-sm">CONTACT US</p>
                                <p className="font-semibold text-gray-800 text-sm">sales@slnsconcrete.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border-2 border-yellow-500">
                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086914747284!2d-79.38690858468117!3d43.64256727912119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7b5a529b5%3A0x3c2d5e2d4f3b45cf!2sRogers%20Centre!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-xl"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact