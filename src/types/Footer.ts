import type { IconType } from "react-icons"

export type NavLink = {
    label: string,
    path: string
}

export type NavColumn = {
    title: string,
    links: NavLink[]
}

export type FooterNewsletterProps = {
    title?: string,
    subtitle?: string,
    placeholder?: string,
    buttonText?: string,
    onSubmit?: (email: string) => void
}

export type SocialLink = {
    name: string,
    url: string,
    icon: IconType
}

export type FooterBottomProps = {
    social?: SocialLink[],
    paymentMethods?: string[],
    copyright?: string,
    iconSize?: 'small' | 'medium' | 'large',
}

export type FooterNavProps = {
    column?: NavColumn[]
}

export type ContactInfo = {
    street: string,
    phone: {
        display: string,
        link: string
    }
    email: string
}

export type workingHours = {
    weekdays: string,
    friday: string,
    saturday: string
}

export type WorkingHours = {
  weekdays: string,
  friday: string,
  saturday: string,
}

export type FooterAdressProps = {
    address?: ContactInfo,
    workingHours?: WorkingHours,
}
