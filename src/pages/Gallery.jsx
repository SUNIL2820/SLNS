import React, { useState, useEffect } from 'react'

const GalleryPage = () => {
    // Gallery images array - using existing assets and adding placeholder paths
    const galleryImages = [
        '/assets/Frame 106.png',
        '/assets/Frame 766.png',
        '/assets/Frame 767.png',
        '/assets/Concrete Texture 2.png',
        '/assets/Concrete Texture 2 (1).png',
        '/assets/download (15) 1.png',
        '/assets/download (15) 2.png',
        '/assets/react.svg' // Using as placeholder for 8th image
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Auto-change gallery images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
                )
                setIsTransitioning(false)
            }, 300) // Half of transition duration
        }, 3000)

        return () => clearInterval(interval)
    }, [galleryImages.length])

    // Handle thumbnail click
    const handleThumbnailClick = (index) => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentImageIndex(index)
            setIsTransitioning(false)
        }, 300)
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <main className="py-12 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Gallery Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase text-[#F5B400] mb-4">
                            GALLERY
                        </h1>
                    </div>

                    {/* Main Gallery Image */}
                    <div className="mb-8">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-white p-4">
                            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                                <img
                                    src={galleryImages[currentImageIndex]}
                                    alt={`Gallery Image ${currentImageIndex + 1}`}
                                    className={`w-full h-full object-cover rounded-lg transition-opacity duration-600 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                                        }`}
                                />

                                {/* Image overlay with subtle pattern */}
                                <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/10 rounded-lg"></div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Row */}
                    <div className="mb-12">
                        <div className="flex space-x-4 overflow-x-auto pb-4">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${index === currentImageIndex
                                            ? 'ring-4 ring-[#F5B400] scale-105'
                                            : 'hover:scale-105 hover:shadow-xl'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default GalleryPage
