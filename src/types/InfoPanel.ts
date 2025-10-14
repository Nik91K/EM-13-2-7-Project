export type InfoCardProps = {
    id: number,
    title: string
    description: string,
    image?: string,
    imageTitle?: string
}

export type InfoPanelProps = {
    items?: InfoCardProps[]
    className?: string
}
