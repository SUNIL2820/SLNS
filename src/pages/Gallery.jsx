import React, { useEffect, useState } from 'react'

const Gallery = () => {
    // Gallery images array - using available images from assets
    const galleryImages = [
        
        '/assets/Frame 766.png',
        '/assets/Frame 767.png',
        '/assets/Property 1=Default.png',
        '/assets/Property 1=Variant2.png',
        '/assets/Property 1=Variant3.png',
        '/assets/Property 1=Variant4.png'
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Auto-slide images on an interval without transitions
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
        }, 2000)

        return () => clearInterval(intervalId)
    }, [galleryImages.length])

    // Handle thumbnail click
    const handleThumbnailClick = (index) => {
        if (index !== currentImageIndex) {
            setCurrentImageIndex(index)
        }
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative filter contrast-125"
            style={{
                backgroundImage: "url('/assets/construction site silhouettes Background.png')",
            }}
        >
            {/* Soft white overlay for blending effect */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>

            {/* Main Content */}
            <main className="relative py-16 px-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <div className="max-w-7xl mx-auto">
                    {/* Gallery Heading */}
                    <div className="text-center mb-12 relative z-10">
                        <h1 className="text-7xl font-bold tracking-widest uppercase text-[#F5B400] drop-shadow-lg">
                            GALLERY
                        </h1>
                    </div>

                    {/* Main Gallery Image - plain image, no card wrapper */}
                    <div className="mb-8">
                        <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
                            <img
                                src={galleryImages[currentImageIndex]}
                                alt={`Gallery Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="mb-12 relative z-10">
                        <div className="flex space-x-5 overflow-x-auto pb-4 justify-center scrollbar-hide">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-lg ${index === currentImageIndex
                                        ? 'ring-4 ring-[#F5B400]'
                                        : ''
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

                    {/* Image counter removed */}
                </div>
            </main>
        </div>
    )
}

export default Gallery