export const HEADER_CONFIG = {
  workingHours: 'Mon-Thu 9:00 AM - 5:30 PM',
  address: '1234 Street Address, City Address, 1234',
  phone: {
    display: '(00) 1234 5678',
    link: '+00012345678',
  },
  social: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: 'facebook' as const,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: 'instagram' as const,
    },
  ],
  contactLink: '/contact',
} as const

export const NAVIGATION_ITEMS = [
    { id: 'laptops', label: 'Laptops', path: '/laptops' },
    { id: 'desktop', label: 'Desktop PCs', path: '/desktop-pcs' },
    { id: 'networking', label: 'Networking Devices', path: '/networking-devices' },
    { id: 'printers', label: 'Printers & Scanners', path: '/printers-scanners' },
    { id: 'parts', label: 'PC Parts', path: '/pc-parts' },
    { id: 'other', label: 'All Other Products', path: '/products' },
    { id: 'repairs', label: 'Repairs', path: '/repairs' },
] as const

export const HEADER_BUTTON = {
    text: 'Our Deals',
    path: '/deals',
}

export const USER_DEFAULT = {
  name: 'John Doe',
  avatarUrl: undefined,
} as const
