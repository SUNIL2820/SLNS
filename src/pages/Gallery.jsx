import React, { useState, useEffect } from 'react'

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
    const [nextImageIndex, setNextImageIndex] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [slideDirection, setSlideDirection] = useState('next')
    const [animationType, setAnimationType] = useState('slide') // 'slide', 'scrollUp', 'scrollDown'

    // Auto-transition effect every 3 seconds with varied animations
    useEffect(() => {
        const interval = setInterval(() => {
            const animations = ['slide', 'scrollUp', 'scrollDown']
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)]
            setAnimationType(randomAnimation)
            setSlideDirection('next')
            setIsTransitioning(true)
            setNextImageIndex((prev) => 
                prev === galleryImages.length - 1 ? 0 : prev + 1
            )
            setTimeout(() => {
                setCurrentImageIndex(nextImageIndex)
                setIsTransitioning(false)
            }, 500)
        }, 3000)

        return () => clearInterval(interval)
    }, [galleryImages.length, nextImageIndex])

    // Handle thumbnail click with varied animations
    const handleThumbnailClick = (index) => {
        if (index !== currentImageIndex) {
            const animations = ['slide', 'scrollUp', 'scrollDown']
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)]
            setAnimationType(randomAnimation)
            setSlideDirection(index > currentImageIndex ? 'next' : 'prev')
            setIsTransitioning(true)
            setNextImageIndex(index)
            setTimeout(() => {
                setCurrentImageIndex(index)
                setIsTransitioning(false)
            }, 500)
        }
    }

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: "url('/assets/building-construction-site-3d-illustration-260nw-1314675041.jpg')",
            }}
        >
            {/* Soft white overlay for blending effect */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

            {/* Main Content */}
            <main className="relative py-16 px-6 lg:px-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <div className="max-w-7xl mx-auto">
                    {/* Gallery Heading */}
                    <div className="text-center mb-12 relative z-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase text-[#F5B400] drop-shadow-lg">
                            GALLERY
                        </h1>
                    </div>

                    {/* Main Image Carousel */}
                    <div className="mb-10 relative z-10">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-6xl mx-auto">
                            <div className="relative h-96 md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
                                {/* Current Image */}
                                <div 
                                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                                        isTransitioning 
                                            ? animationType === 'slide'
                                                ? slideDirection === 'next' 
                                                    ? '-translate-x-full' 
                                                    : 'translate-x-full'
                                                : animationType === 'scrollUp'
                                                    ? '-translate-y-full'
                                                    : 'translate-y-full'
                                            : 'translate-x-0 translate-y-0'
                                    }`}
                                >
                                    <img
                                        src={galleryImages[currentImageIndex]}
                                        alt={`Gallery Image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-contain object-center"
                                    />
                                    {/* Sharp gradient overlay at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                                </div>
                                
                                {/* Next Image (for transition effect) */}
                                {isTransitioning && (
                                    <div 
                                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                                            animationType === 'slide'
                                                ? slideDirection === 'next' 
                                                    ? isTransitioning 
                                                        ? 'translate-x-0' 
                                                        : 'translate-x-full'
                                                    : isTransitioning 
                                                        ? 'translate-x-0' 
                                                        : '-translate-x-full'
                                                : animationType === 'scrollUp'
                                                    ? isTransitioning 
                                                        ? 'translate-y-0' 
                                                        : 'translate-y-full'
                                                    : isTransitioning 
                                                        ? 'translate-y-0' 
                                                        : '-translate-y-full'
                                        }`}
                                    >
                                        <img
                                            src={galleryImages[nextImageIndex]}
                                            alt={`Gallery Image ${nextImageIndex + 1}`}
                                            className="w-full h-full object-contain object-center"
                                        />
                                        {/* Sharp gradient overlay at bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="mb-12 relative z-10">
                        <div className="flex space-x-4 md:space-x-5 overflow-x-auto pb-4 justify-center scrollbar-hide">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`flex-shrink-0 w-28 h-16 md:w-36 md:h-20 lg:w-40 lg:h-22 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform ${
                                        index === currentImageIndex 
                                            ? 'ring-4 ring-[#F5B400] scale-105 shadow-2xl border-2 border-[#F5B400]' 
                                            : 'hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-[#F5B400]/50 hover:border hover:border-[#F5B400]/30'
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
                        <p className="text-gray-600 text-sm md:text-base">
                            {currentImageIndex + 1} of {galleryImages.length}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Gallery
