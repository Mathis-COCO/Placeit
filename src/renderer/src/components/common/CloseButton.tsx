export interface CloseButtonProperties {
    onClick: () => void
    imgPath: string
}

export function CloseButton({onClick, imgPath}: CloseButtonProperties) {
    return (
        <button className="close-button" onClick={onClick}>
            <img src={imgPath} alt="close"/>
        </button>
    )
}