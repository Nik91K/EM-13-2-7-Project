import React from "react";
import FooterNav from "./FooterNav"
import FooterNewsLetter from "./FooterNewsLetter"
import FooterAdress from "./FooterAdress";
import FooterBottom from "./FooterBottom";

const Footer:React.FC = () => {

    const handleSubmit = (email: string) => {
        console.log(email)
    }

    return (
        <footer className="bg-[var(--background-color-second)] text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <FooterNewsLetter onSubmit={handleSubmit}/>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                    <div className="lg:col-span-4">
                        <FooterNav />
                    </div>
                    <FooterAdress />
                </div>
                <FooterBottom />
            </div>
            
            
        </footer>
    )
}

export default Footer
