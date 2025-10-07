import type { IconType } from 'react-icons';
import { SIZES } from "../../../../fixtures";
import React from 'react';

type IconButtonProps = {
    label: string
    Icon: IconType,
    onClick?: () => void,
    size?: "small" | "medium" | "large",
    className?: string,
    badge?: number
}

const IconButton:React.FC<IconButtonProps> = ({ size = "medium", onClick, className = "", badge, Icon, label }) => {
    const iconSize = SIZES.avatar[size]

    return (
        <button
            onClick={onClick}
            aria-label={label}
            className={`relative cursor-pointer hover:opacity-70 transition-opacity ${className}`}
            type='button'
        >
            <Icon size={iconSize}/>
            {badge !== undefined && badge > 0 && (
                <span
                    className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'
                    aria-label={`${badge} items`}
                >
                    {badge > 99 ? '99+' : badge}
                </span>
            )}
        </button>
    )
}

export default IconButton
