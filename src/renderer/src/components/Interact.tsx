import interact from 'interactjs'
import '../assets/css/components/InteractElement.css'
import {ChangeEvent, useContext, useState} from "react";
import {GroupContext} from "../context/groups/GroupProvider";

function InteractZones(): JSX.Element {
    const position = { x: 0, y: 0 }
    const [state,] = useContext(GroupContext);
    const [selectedZone, setSelectedZone] = useState<null | number>(null);
    const [selectedOption, setSelectedOption] = useState<string>("");

    interact('.draggable').draggable({
    listeners: {
        start () {},
        move (event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        },
    },
    modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
    ]
    })

    const selectZone = (zone: number) => {
        setSelectedZone(zone);
    }

    const closeDropdown = () => {
        setSelectedZone(null);
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }

    return (
        <div className="interact-container">
            {state.currentGroup && <h1>{state.currentGroup.label}</h1>}
            {state.currentGroup && state.currentGroup.zones.map((zone, index) => (
                <div className="draggable" key={index} onClick={() => selectZone(zone.id)}>
                    <p className='zone-places'>{zone.totalPlaces - zone.occupiedPlaces} places</p>
                    <p className='zone-index'>{zone.id}</p>
                </div>
            ))}
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

export default InteractZones;