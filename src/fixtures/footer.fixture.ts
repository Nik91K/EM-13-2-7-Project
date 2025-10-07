import { FaFacebook, FaInstagram } from "react-icons/fa"

export const FOOTER_CONFIG = {
    newsletter: {
        title: 'Sign Up To Our Newsletter.',
        subtitle: 'Be the first to hear about the latest offers.',
        placeholder: 'Your Email',
        buttonText: 'Subscribe',
    },
    company: {
        address: {
            street: '1234 Street Adress City Address, 1234',
            phone: {
                display: '(00) 1234 5678',
                link: '+00012345678',
            },
            email: 'shop@email.com',
        },
        workingHours: {
            weekdays: 'Monday-Thursday: 9:00 AM - 5:30 PM',
            friday: 'Friday: 9:00 AM - 6:00 PM',
            saturday: 'Saturday: 11:00 AM - 5:00 PM',
        },
        },
        social: [
            { name: 'Facebook', url: 'https://facebook.com', icon: FaFacebook },
            { name: 'Instagram', url: 'https://instagram.com', icon: FaInstagram },
    ],
    paymentMethods: ['paypal', 'visa', 'maestro', 'discover', 'amex'],
    copyright: 'Copyright © 2020 Shop Pty. Ltd.',
} as const

export const FOOTER_NAV = {
    information: [
        { label: 'About Us', path: '/about' },
        { label: 'About Zip', path: '/zip' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Search', path: '/search' },
        { label: 'Terms', path: '/terms' },
        { label: 'Orders and Returns', path: '/returns' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Advanced Search', path: '/search/advanced' },
        { label: 'Newsletter Subscription', path: '/newsletter' },
    ],
    pcParts: [
        { label: 'CPUS', path: '/pc-parts/cpus' },
        { label: 'Add On Cards', path: '/pc-parts/cards' },
        { label: 'Hard Drives (Internal)', path: '/pc-parts/hard-drives' },
        { label: 'Graphic Cards', path: '/pc-parts/graphic-cards' },
        { label: 'Keyboards / Mice', path: '/pc-parts/keyboards-mice' },
        { label: 'Cases / Power Supplies / Cooling', path: '/pc-parts/cases' },
        { label: 'RAM (Memory)', path: '/pc-parts/ram' },
        { label: 'Software', path: '/pc-parts/software' },
        { label: 'Speakers / Headsets', path: '/pc-parts/speakers' },
        { label: 'Motherboards', path: '/pc-parts/motherboards' },
    ],
    desktopPcs: [
        { label: 'Custom PCs', path: '/desktop/custom' },
        { label: 'Servers', path: '/desktop/servers' },
        { label: 'MSI All-In-One PCs', path: '/desktop/msi-aio' },
        { label: 'HP/Compaq PCs', path: '/desktop/hp-compaq' },
        { label: 'ASUS PCs', path: '/desktop/asus' },
        { label: 'Tecs PCs', path: '/desktop/tecs' },
    ],
    laptops: [
        { label: 'Everyday Use Notebooks', path: '/laptops/everyday' },
        { label: 'MSI Workstation Series', path: '/laptops/msi-workstation' },
        { label: 'MSI Prestige Series', path: '/laptops/msi-prestige' },
        { label: 'Tablets and iPad', path: '/laptops/tablets' },
        { label: 'Netbooks', path: '/laptops/netbooks' },
        { label: 'Infinity Gaming Notebooks', path: '/laptops/gaming' },
    ],
} as const
