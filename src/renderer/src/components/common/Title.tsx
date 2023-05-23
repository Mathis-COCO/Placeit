export interface TitleProperties {
    text: string
}

export function Title({text}: TitleProperties) {
    return (
        <div className="title">
            <h1>{text}</h1>
        </div>
    )
}