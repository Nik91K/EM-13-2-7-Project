import React from "react";
import { FOOTER_CONFIG } from "../../../fixtures"
import type { FooterAdressProps } from "../../../types/Footer";

export const FooterAdress:React.FC<FooterAdressProps> = ({
    address = FOOTER_CONFIG.company.address,
    workingHours = FOOTER_CONFIG.company.workingHours
}) => {
    
    const workDays = [
        workingHours.weekdays,
        workingHours.friday,
        workingHours.saturday
    ]

    return (
        <div>
            <h3 className="text-[var(--text-color-second)]">Adress</h3>
            <address className="text-white text-sm space-y-3 not-italic">
                <p>Adress{address.street}</p>
                <p>
                    Phones:
                    <a href={`tel:${address.phone.link}`} className="text-blue-400 hover:text-blue-300">
                        {address.phone.display}
                    </a>
                </p>
                <div>
                    <p className="mb-1">We are open:</p>
                    {workDays.map((day, item) => (
                        <p key={item}>{day}</p>
                    ))}
                </div>
                <p>
                    E-mail:
                    <a href={`mailto:${address.email}`} className="text-blue-400 hover:text-blue-300">
                        {address.email}
                    </a>
                </p>
            </address>
        </div>
    )
}

export default FooterAdress
