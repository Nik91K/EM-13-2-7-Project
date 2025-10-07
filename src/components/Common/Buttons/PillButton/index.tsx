import React from 'react';
import { Link } from 'react-router';

type PillButtonType = {
    text: string,
    path?: string,
    onClick?: () => void,
    className?: string
}

const PillButton:React.FC<PillButtonType> = ({ text, path, onClick, className = "" }) => {
    const buttonClasses = `rounded-2xl text-[var(--text-color-third)] cursor-pointer px-4 py-2 border-2 border-[var(--text-color-third)] hover:bg-[var(--text-color-third)] hover:text-white transition-colors ${className}`

    if (path) {
        return (
            <Link to={path} className={buttonClasses} >
                {text}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={buttonClasses} type='button' >
            {text}
        </button>
    )
}

export default PillButton
