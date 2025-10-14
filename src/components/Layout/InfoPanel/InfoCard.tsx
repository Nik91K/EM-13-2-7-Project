import React from "react";
import type { InfoCardProps } from "../../../types/InfoPanel";

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    description,
    image,
    imageTitle,
}) => {
    return (
        <div className="flex flex-col items-center text-center max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
            <img 
                src={image} 
                alt={imageTitle} 
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-200"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default InfoCard;
