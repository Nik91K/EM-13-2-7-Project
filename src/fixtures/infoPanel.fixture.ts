import { FaHeadphones, FaUser, FaTag } from 'react-icons/fa'

export const INFO_PANEL_ITEMS = [
    {
        id: 'support',
        icon: FaHeadphones,
        title: 'Product Support',
        description: 'Up to 3 years on-site warranty available for your peace of mind.',
    },
    {
        id: 'account',
        icon: FaUser,
        title: 'Personal Account',
        description: 'With big discounts, free delivery and a dedicated support specialist.',
    },
    {
        id: 'savings',
        icon: FaTag,
        title: 'Amazing Savings',
        description: 'Up to 70% off new Products, you can be sure of the best price.',
    }
] as const
