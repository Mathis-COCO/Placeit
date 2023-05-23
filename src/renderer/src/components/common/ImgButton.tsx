export interface ImgButtonProperties {
    onClick: () => void
    imgPath: string
}

export function ImgButton({onClick, imgPath}: ImgButtonProperties) {
    return (
        <button className="img-button" onClick={onClick}>
            <img src={imgPath} alt="img-button"/>
        </button>
    )
}