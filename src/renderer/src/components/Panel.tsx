import logo from '../assets/img/logo.png'
import {useState} from "react";
import {Button} from "./common/Button";

export default function Panel(): JSX.Element {
    const [groups, setGroups] = useState<Array<string>>(["Group 1", "Group 2", "Group 3"]);
    const [selectedZone, setSelectedZone] = useState<null | string>(null);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const addGroup = () => {
        setGroups([...groups, "Nouveau groupe"])
    }

    const selectZone = (zone: string) => {
        setSelectedZone(zone);
    }

    const closeDropdown = () => {
        setSelectedZone(null);
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }


    return (
        <div className="left-bar">
            <div className="logo-content">
                <img className="logo" src={logo} alt="PlaceIt Logo"/>
            </div>
            <Button text={"Ajouter un groupe"} onClick={addGroup}/>
            <div className="groups-container">
                {
                    groups.map((group, index) => (
                        <p key={index} className='group-name'>{group}</p>
                    ))
                }
            </div>
            <div className="zones-container">
                <div className="zone" onClick={() => selectZone("Zone 1")}>
                    Zone 1
                </div>
                <div className="zone" onClick={() => selectZone("Zone 2")}>
                    Zone 2
                </div>
            </div>
            {selectedZone && (
                <div className="dropdown-menu">
                    <button className="close-button" onClick={closeDropdown}>X</button>
                    <div className="reservation">
                        <span>Réservation</span>
                        <select value={selectedOption} onChange={handleChange}>
                            {["Example", "Test","OUI","NON"].map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}