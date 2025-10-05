import HeaderBanner from "../../Common/Banners/HeaderBanner"
import Logo from '../../../assets/logo/icon.svg'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import PillButton from "../../Common/Buttons/PillButton";
import { useSafeNavigate } from "../../../hooks/useNavigateError";
import { Link } from "react-router";

const Header = () => {
    const navigate = useSafeNavigate()

    const handleDealsClick = () => {
        navigate('/deals')
    }

    return (
        <header className="border-b sticky border-b-[var(--text-color-second)]" >
            <HeaderBanner />
            <div className="text-base flex items-center justify-around p-5">
                <div className="w-[33px]">
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <nav>
                    <ul className="list-none flex justify-center gap-5 items-center">
                        <li>
                            <Link className="link" to="/">Laptops</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Desktop PCs</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Networking Devices</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Printers & Scanners</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">PC Parts</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">All Other Products</Link>
                        </li>
                        <li>
                            <Link className="link" to="/">Repairs</Link>
                        </li>
                        <li>
                            <PillButton text="Our Deals" onClick={handleDealsClick}/>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-4 items-center">
                    <FaSearch size={25} className="cursor-pointer" aria-label="Search for products" role="button"/>
                    <FaShoppingCart size={25} className="cursor-pointer" aria-label="Shopping cart" role="button"/>
                    <div className="rounded-full w-[38px]">
                        <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="logo" className="rounded-full"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
