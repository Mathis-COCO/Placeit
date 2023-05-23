import interact from 'interactjs'
import '../assets/css/components/InteractElement.css'
import {useContext} from "react";
import {GroupContext} from "../context/groups/GroupProvider";
import {AppContext} from "../context/app/AppProvider";
import {ZoneType} from "../types/ZoneType";
import {AppActionType} from "../context/app/AppReducer";

function InteractZones(): JSX.Element {
    const position = {x: 0, y: 0}
    const [state,] = useContext(GroupContext);
    const [test, dispatch] = useContext(AppContext);

    interact('.draggable').draggable({
        listeners: {
            start() {
            },
            move(event) {
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

    const selectZone = async (zone: ZoneType) => {
        console.log(test)
        await dispatch({
            type: AppActionType.SET_SELECTED_ZONE,
            payload: zone
        })
    }

    return (
        <div className='right-part'>
            <div className="interact-container">
                {state.currentGroup && <h1>{state.currentGroup.label}</h1>}
                {state.currentGroup && state.currentGroup.zones.map((zone, index) => (
                    <div className="draggable" key={index} onClick={() => selectZone(zone)}>
                        <p className='zone-places'>{zone.totalPlaces - zone.occupiedPlaces} places</p>
                        <p className='zone-index'>{zone.id}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InteractZones;