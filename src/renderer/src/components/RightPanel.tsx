import {ChangeEvent, useContext, useState} from "react";
import {AppContext} from "../context/app/AppProvider";
import {AppActionType} from "../context/app/AppReducer";
import deploy from '../assets/img/deploy.svg'

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
        <div className="right-panel">
            <button className="close-button" onClick={closeDropdown}>
                <img src={deploy} alt="deploy"/>
            </button>
            <h1>Zone {state.selectedZone.id}</h1>
            <div className="fields">
                <span className="field-text">Réservation</span>
                <select value={selectedOption} onChange={handleChange}>
                    {["Example", "Test", "OUI", "NON"].map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <span className="field-text">Nombre de places</span>
                <input className="option-input" type="number" min="0"/>
                <span className="field-text">Table disponible</span>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <span className="field-text">Statut de nettoyage</span>
                <select className="option-select">
                    {["Clean", "Dirty"].map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    ) : (<div></div>)
}