import React from "react";
import type { InfoCardProps } from "../../../types/InfoPanel";
import { SIZES } from "../../../fixtures";

const InfoCard:React.FC<InfoCardProps> = ({
    icon: Icon,
    title,
    description,
    iconBgColor = 'bg-blue-600',
    iconColor = 'text-white',
    iconSize = 'medium',    
}) => {
    return (
        <div className="flex flex-col items-center text-center max-s-sm">
            <div className={`${iconBgColor} ${iconColor} flex items-center rounded-full justify-center mb-4 w-16 h-16`}>
                <Icon size={SIZES.icon[iconSize]} />
            </div>
            <h3 className="text-lg mb-2">
                {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default InfoCard
