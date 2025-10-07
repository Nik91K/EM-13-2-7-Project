export type NavigationItem = {
  id: string,
  label: string,
  path: string,
}

export type SocialLink = {
  name: string,
  url: string,
  icon: 'facebook' | 'instagram' | 'twitter' | 'linkedin',
}

export type HeaderBannerProps = {
  workingHours?: string,
  address?: string,
  phone?: {
    display: string,
    link: string,
  },
  social?: SocialLink[],
  contactLink?: string,
}

export type HeaderNavigationProps = {
  items?: NavigationItem[],
  buttonText?: string,
  buttonPath?: string,
  onClick?: () => void,
}

export type HeaderActionsProps = {
  onSearchClick?: () => void,
  onCartClick?: () => void,
  onProfileClick?: () => void,
  cartCount?: number,
  userName?: string,
  userAvatar?: string,
}

export type SizeVariant = 'small' | 'medium' | 'large'
