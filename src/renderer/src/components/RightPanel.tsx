import {ChangeEvent, useState} from "react";

export default function RightPanel(): JSX.Element {
    const [, setSelectedZone] = useState<null | number>(null);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const closeDropdown = () => {
        setSelectedZone(null);
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="dropdown-menu">
            <button className="close-button" onClick={closeDropdown}>X</button>
            <div className="reservation">
                <span>Réservation</span>
                <select value={selectedOption} onChange={handleChange}>
                    {["Example", "Test", "OUI", "NON"].map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}