import {ChangeEvent, useContext, useState} from "react";
import {AppContext} from "../context/app/AppProvider";
import {AppActionType} from "../context/app/AppReducer";

export default function RightPanel(): JSX.Element {
    const [state, dispatch] = useContext(AppContext);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const closeDropdown = async () => {
        await dispatch({
            type: AppActionType.SET_SELECTED_ZONE,
            payload: undefined
        })
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    return state.selectedZone ? (

        <div className="dropdown-menu">
            <button className="close-button" onClick={closeDropdown}>X</button>
            <h2>Zone {state.selectedZone.id}</h2>
            <div className="reservation">
                <span>Réservation</span>
                <select value={selectedOption} onChange={handleChange}>
                    {["Example", "Test", "OUI", "NON"].map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <div className="option">
                    <span>Nombre de places</span>
                    <input className="option-input" type="number" min="0"/>
                </div>
                <div className="option">
                    <span>Table disponible</span>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="option">
                    <span>Statut de nettoyage</span>
                    <select className="option-select">
                        {["Clean", "Dirty"].map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    ) : (<div></div>)
}