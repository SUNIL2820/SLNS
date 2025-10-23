import React from "react";

const FeatureSection = ({ bgImage, overlayColor = "bg-black/60", icon, title, points = [] }) => {
    return (
        <div
            className="relative w-full bg-cover bg-center text-white py-16 px-6 flex flex-col justify-center items-center rounded-2xl overflow-hidden"
            style={{
                backgroundImage: `url("/assets/Concrete Texture 2.png")`,
            }}

        >
            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayColor} mix-blend-multiply`}></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6">{title}</h2>

                {/* Bullet Points */}
                <ul className="text-lg space-y-3 list-disc list-inside text-gray-100">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FeatureSection;
