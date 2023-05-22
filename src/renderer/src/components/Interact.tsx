import interact from 'interactjs'
import '../assets/css/components/InteractElement.css'
import {useContext} from "react";
import {GroupContext} from "../context/groups/GroupProvider";

function InteractZones(): JSX.Element {
    const position = { x: 0, y: 0 }
    const [state,] = useContext(GroupContext);

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

    return (
        <div className="interact-container">
            {state.currentGroup && state.currentGroup.zones.map((zone, index) => (
                <div className="draggable" key={index}>
                    <p className='zone-places'>{zone.totalPlaces - zone.occupiedPlaces} places</p>
                    <p className='zone-index'>{zone.id}</p>
                </div>
            ))}
        </div>
    )
}

export default InteractZones;