import interact from 'interactjs'
import '../assets/css/components/InteractElement.css'

function InteractZones(): JSX.Element {
    const position = { x: 0, y: 0 }
    const zoneList = ['Zone 1', 'Zone 2'];

    interact('.draggable').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
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
            {zoneList.map((name, index) => (
                <div className="draggable" key={index}>
                    <p className='zone-places'>{name}</p>
                    <p className='zone-index'>{index}</p>
                </div>
            ))}
        </div>
    )
}

export default InteractZones;