import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { HEADER_CONFIG } from "../../../../fixtures";
import type { HeaderBannerProps } from "../../../../types/Header";
import { Link } from "react-router-dom";

const HeaderBanner: React.FC<HeaderBannerProps> = ({
  workingHours = HEADER_CONFIG.workingHours,
  address = HEADER_CONFIG.address,
  phone = HEADER_CONFIG.phone,
  social = HEADER_CONFIG.social,
  contactLink = HEADER_CONFIG.contactLink,
}) => {
  const getSocialIcons = (icon: string) => {
    if (icon === 'facebook') {
      return <FaFacebookSquare size={18} />
    } else if ( icon === 'instagram' ) {
      return <FaInstagramSquare size={18} />
    } else {
      return null
    }
  }

  return (
    <div className="header-banner w-full text-white text-sm flex justify-center p-5 bg-[var(--background-color-second)]">
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
        <p>{workingHours}</p>

        <div className="flex gap-1">
          <p className="text-center">Visit our showroom at {address}</p>
          <Link to={contactLink} className="underline font-bold text-white hover:opacity-80">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href={`tel:${phone.link}`} 
            className="text-white no-underline hover:opacity-80 whitespace-nowrap"
          >
            Call Us: {phone.display}
          </a>
          {social.map((items) => (
            <a
              key={items.name}
              href={items.url}
              aria-label={`Visit our page at ${items.name}`}
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getSocialIcons(items.icon)}
            </a>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default HeaderBanner;
