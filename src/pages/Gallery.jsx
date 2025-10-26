import React, { useState } from 'react'

const Gallery = () => {
    // Gallery images array - using available images from assets
    const galleryImages = [
        '/assets/Frame 106.png',
        '/assets/Frame 766.png', 
        '/assets/Frame 767.png',
        '/assets/Property 1=Default.png',
        '/assets/Property 1=Variant2.png',
        '/assets/Property 1=Variant3.png',
        '/assets/Property 1=Variant4.png'
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Handle thumbnail click
    const handleThumbnailClick = (index) => {
        if (index !== currentImageIndex) {
            setCurrentImageIndex(index)
        }
    }

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('SLNS\public\assets\construction site silhouettes Background 2.png')",
            }}
        >
            {/* Soft white overlay for blending effect */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

            {/* Main Content */}
            <main className="relative py-16 px-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <div className="max-w-7xl mx-auto">
                    {/* Gallery Heading */}
                    <div className="text-center mb-12 relative z-10">
                        <h1 className="text-7xl font-bold tracking-widest uppercase text-[#F5B400] drop-shadow-lg">
                            GALLERY
                        </h1>
                    </div>

                    {/* Main Image Display */}
                    <div className="mb-10 relative z-10">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-6xl mx-auto">
                            <div className="relative h-[550px] overflow-hidden">
                                {/* Current Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={galleryImages[currentImageIndex]}
                                        alt={`Gallery Image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-contain object-center"
                                    />
                                    {/* Sharp gradient overlay at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="mb-12 relative z-10">
                        <div className="flex space-x-5 overflow-x-auto pb-4 justify-center scrollbar-hide">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`flex-shrink-0 w-40 h-22 rounded-lg overflow-hidden shadow-lg ${
                                        index === currentImageIndex 
                                            ? 'ring-4 ring-[#F5B400] scale-105 shadow-2xl border-2 border-[#F5B400]' 
                                            : 'ring-2 ring-[#F5B400]/50 border border-[#F5B400]/30'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-contain object-center"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="text-center relative z-10">
                        <p className="text-gray-600 text-base">
                            {currentImageIndex + 1} of {galleryImages.length}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Gallery