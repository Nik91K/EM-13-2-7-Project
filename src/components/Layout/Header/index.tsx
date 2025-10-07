import HeaderBanner from "../../Common/Banners/HeaderBanner"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSafeNavigate } from "../../../hooks/useNavigateError";
import SiteLogo from "../../Common/SiteLogo";
import HeaderNav from "./HeaderNav";
import HeaderActions from "./HeaderActions";
import { useState } from "react";
const Header = () => {
    const navigate = useSafeNavigate()
    const [cartCount] = useState(3) //

    const handleSearch = () => {
        console.log()
    }

    const handleCart = () => {
        console.log()
        navigate('/cart')
    }

    const handleAvatar = () => {
        console.log()
        navigate('/profile')
    }
    return (
        <header className="border-b sticky border-b-[var(--text-color-second)]" >
            <HeaderBanner />
            <div className="text-base flex items-center justify-around p-5">
                <SiteLogo size="medium"/>
                <HeaderNav />
                <HeaderActions 
                    onSearchClick={handleSearch}
                    onProfileClick={handleAvatar}
                    onCartClick={handleCart}
                />
            </div>
        </header>
    )
}

export default Header
