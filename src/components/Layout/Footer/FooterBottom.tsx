import React from "react";
import { FOOTER_CONFIG } from "../../../fixtures";
import { SIZES } from "../../../fixtures";
import type { FooterBottomProps } from "../../../types/Footer"; 

const FooterBottom: React.FC<FooterBottomProps> = ({
    social = FOOTER_CONFIG.social,
    paymentMethods = FOOTER_CONFIG.paymentMethods,
    copyright = FOOTER_CONFIG.copyright,
    iconSize = 'medium'
}) => {

    return (
        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between items-center gap-4">
            <div className="flex gap-4">
            {social.map((item) => {
                const Icon = item.icon
                return (
                <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Visit our page at ${item.name}`}
                >
                    <Icon size={SIZES.icon[iconSize]} />
                </a>
                )
            })}
            </div>
            <div className="flex gap-2">
                <span className="text-gray-500 text-xs">{paymentMethods.join(' | ')}</span>
            </div>
            <p className="text-gray-500 text-sm">{copyright}</p>
        </div>
    )
}

export default FooterBottom
