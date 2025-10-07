import type React from "react"
import { SIZES } from "../../../fixtures"

type AvatarProps = {
    name: string,
    imageURL?: string,
    onClick?: () => void,
    size?: "small" | "medium" | "large",
    className?: string
}

const UserAvatar:React.FC<AvatarProps> = ({ size = "medium", name, imageURL, className = "", onClick }) => {
    const avatarSize = SIZES.avatar[size]
    const defaultURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`
    
    return (
        <button
        style={{ width: avatarSize, height: avatarSize}}
        className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
        aria-label={`User profile ${name}`}
        type="button"
        onClick={onClick}
        >
            <img 
            src={defaultURL}
            alt="logo"
            className="rounded-full w-full h-full object-cover"
            />
        </button>
    )
}

export default UserAvatar
