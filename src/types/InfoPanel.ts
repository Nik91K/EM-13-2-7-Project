export type InfoCardProps = {
    id: number,
    title: string
    description: string,
}

export type InfoPanelProps = {
    items?: InfoCardProps[]
    className?: string
}
