import logo from '../assets/img/logo.png'
import {useContext, useState} from "react";
import {Button} from "./common/Button";
import {GroupContext} from "../context/groups/GroupProvider";
import {GroupActionType} from "../context/groups/GroupReducer";

export default function Panel(): JSX.Element {
    const [state, dispatch] = useContext(GroupContext)
    const [groupCount, setGroupCount] = useState(1)
    const [zoneCount, setZoneCount] = useState(1)
    const [selectedZone, setSelectedZone] = useState<null | string>(null);
    const [selectedOption, setSelectedOption] = useState<string>("");

    const addGroup = () => {
        setGroupCount(groupCount + 1)
        dispatch({
            type: GroupActionType.ADD_GROUP,
            payload: {
                id: groupCount,
                label: `Groupe ${groupCount}`,
                zones: []
            },
        });
    }

    const addZone = () => {
        if (state.currentGroup) {
            setZoneCount(zoneCount + 1)
            if (state.currentGroup) {
                dispatch({
                    type: GroupActionType.SET_ZONES,
                    payload: [
                        ...state.currentGroup.zones,
                        {
                            id: zoneCount,
                            totalPlaces: 20,
                            reservedPlaces: 10,
                            occupiedPlaces: 8,
                        }
                    ]
                })
            }
        }
    }

    const openGroup = (id: number) => {
        const group = state.groups.filter(group => group.id === id)[0];

        dispatch({
            type: GroupActionType.SET_CURRENT_GROUP,
            payload: group,
        });
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
                    state.groups.map((group, index) => (
                        <p key={index} className='group-name' onClick={() => openGroup(group.id)}>{group.label}</p>
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
            <Button text={"Ajouter une zone"} onClick={addZone}/>
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
