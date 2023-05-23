export interface SelectorProperties {
    options: Array<string>
}

export function Selector({options}: SelectorProperties): JSX.Element {
    return (
        <select className="option-select">
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}