import { Link } from "react-router-dom";
import LogoImage from "../../../assets/logo/icon.svg"
import { SIZES } from "../../../fixtures";

type LogoProps = {
    size?: "small" | "medium" | "large",
    to?: string,
    className?: string
}

const SiteLogo:React.FC<LogoProps> = ({size = "medium", to = "/", className=""}) => {
    const logoSize = SIZES.logo[size]

    return (
        <div className={className} style={{ width: logoSize, height: logoSize }}>
            <Link to={to}>
                <img src={LogoImage} 
                alt="Tech Store" 
                width={logoSize}
                height={logoSize}
                className="w-full h-full object-contain"
                />
            </Link>
        </div>
    )
}

export default SiteLogo
