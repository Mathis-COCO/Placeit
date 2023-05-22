export interface ButtonProperties {
    text: string;
    onClick: () => void;
}

export const Button = ({text, onClick}: ButtonProperties) => (
    <button className="button" onClick={onClick}>{text}</button>
)
