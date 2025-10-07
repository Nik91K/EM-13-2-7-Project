import React, { useState } from "react";
import { FOOTER_CONFIG } from "../../../fixtures";
import type { FooterNewsletterProps } from "../../../types/Footer";

const FooterNewsLetter:React.FC<FooterNewsletterProps> = ({
    title = FOOTER_CONFIG.newsletter.title,
    subtitle = FOOTER_CONFIG.newsletter.subtitle,
    placeholder = FOOTER_CONFIG.newsletter.placeholder,
    buttonText = FOOTER_CONFIG.newsletter.buttonText,
    onSubmit,
}) => {
    const [email, setEmail] = useState('')
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault
        if (onSubmit) {
            onSubmit(email)
        }
        setEmail('')
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-[var(--text-color-second)]">{subtitle}</p>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={email}
                    placeholder={placeholder}
                    required
                    className="flex-1 px-4 py-4 border border-white placeholder-[var(--text-color-second)]"
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                    {buttonText}
                </button>
            </form>
        </div>
    )
}

export default FooterNewsLetter
