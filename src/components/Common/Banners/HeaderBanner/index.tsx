import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const HeaderBanner = () => {
  return (
    <div className="header-banner w-full text-white text-sm flex justify-center p-5 bg-[var(--background-color-second)]">
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
        <p>Mon-Thu 9:00 AM - 5:30 PM</p>

        <div className="flex gap-1">
          <p className="text-center">Visit our showroom at 1234 Street Address, City Address, 1234 </p>
          <p className="underline" style={{ fontWeight: 800 }}>Contact Us</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+00012345678" className="decoration-0 text-white">
            Call Us: (00) 1234 5678
          </a>
          <a href="https://www.facebook.com/" className="hover:text-blue-400 transition">
            <FaFacebookSquare size={18} />
          </a>
          <a href="https://www.instagram.com/" className="hover:text-pink-400 transition">
            <FaInstagramSquare size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderBanner;
