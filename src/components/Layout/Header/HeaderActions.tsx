import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import IconButton from '../../Common/Buttons/IconButton';
import UserAvatar from '../../Common/UserAvatar';
import type { HeaderActionsProps } from '../../../types/Header';
import { USER_DEFAULT } from '../../../fixtures';

const HeaderActions:React.FC<HeaderActionsProps> = ({
    onSearchClick,
    onProfileClick,
    onCartClick,
    cartCount = 0,
    userName = USER_DEFAULT.name,
    userAvatar = USER_DEFAULT.avatarUrl,
}) => {
    return (
        <div className="flex gap-4 items-center">
            <IconButton 
                Icon={FaSearch}
                size="medium"
                label="Search for products"
                onClick={onSearchClick}
            />
            
            <IconButton 
                Icon={FaShoppingCart}
                size="medium"
                label={cartCount > 0 ? `Shopping cart (${cartCount} items)` : 'Shopping cart'}
                onClick={onCartClick}
                badge={cartCount}
            />
            
            <UserAvatar 
                name={userName}
                imageURL={userAvatar}
                size="medium"
                onClick={onProfileClick}
            />
        </div>
    )
}

export default HeaderActions
