const PillButton = ({text, onClick} : {text: string, onClick: () => void}) => {
    return (
        <button onClick={onClick} className="rounded-2xl text-[var(--text-color-third)] cursor-pointer p-1 border-2 border-b-[var(--text-color-third)]">
            {text}
        </button>
    )
}

export default PillButton
