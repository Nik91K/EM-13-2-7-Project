import type { IconType } from "react-icons";

export type InfoCardProps = {
    id: string,
    icon: IconType,
    title: string
    description: string,
    iconBgColor?: string
    iconColor?: string,
    iconSize?: 'small' | 'medium' | 'large',
}

export type InfoPanelProps = {
    items?: InfoCardProps[]
    className?: string
}
