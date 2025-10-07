import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from '../../Common/Buttons/PillButton';
import type { HeaderNavigationProps } from '../../../types/Header';
import { NAVIGATION_ITEMS, HEADER_BUTTON } from '../../../fixtures';

const HeaderNav: React.FC<HeaderNavigationProps> = ({
    items = NAVIGATION_ITEMS,
    buttonText = HEADER_BUTTON.text,
    buttonPath = HEADER_BUTTON.path,
    onClick
}) => {
    return (
        <nav aria-label="Main navigation">
            <ul className="list-none flex justify-center gap-5 items-center">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link 
                            to={item.path}
                            className="link hover:opacity-70 transition-opacity"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <PillButton 
                        text={buttonText}
                        path={onClick ? undefined : buttonPath}
                        onClick={onClick}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav
