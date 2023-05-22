import { GroupeData } from "./GroupeData"
import "../assets/Total.css"

const Total = () => {

    let nbPlaceTotal = 0;
    let nbPlaceOccupied = 0;
    let nbPlaceBooked = 0;

    GroupeData.map(item => (
        nbPlaceTotal += item.nbPlaceTotal,
        nbPlaceOccupied += item.nbPlaceOccupied,
        nbPlaceBooked += item.nbPlaceBooked
    ))

    let nbPlaceFree = nbPlaceTotal - nbPlaceOccupied - nbPlaceBooked;

    return (
        <div className="body">
            <div className="bar">
                <h1 className="block">Total : </h1>
                <div className="block">{nbPlaceTotal} Places</div>
                <div className="block">{nbPlaceOccupied} Occupées</div>
                <div className="block">{nbPlaceBooked} Réservées</div>
                <div className="block">{nbPlaceFree} Libres</div>
            </div>
        </div>
        
        
    )
}

export default Total