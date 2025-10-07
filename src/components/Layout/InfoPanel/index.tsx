import React from "react";
import InfoCard from "./InfoCard";
import { INFO_PANEL_ITEMS } from "../../../fixtures";
import type { InfoPanelProps } from "../../../types/InfoPanel";

const InfoPanel:React.FC<InfoPanelProps> = ({
    items = INFO_PANEL_ITEMS,
    className = ''
}) => {
    return (
        <div
            className={`bg-gray-50 py-12 px-4 ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-around">
                    {items.map((item) => {
                        return (
                            <InfoCard 
                                key={item.id}
                                id={item.id}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default InfoPanel
