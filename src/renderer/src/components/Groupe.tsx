import { GroupeData } from "./GroupeData"
import "../assets/Groupe.css"

const Groupe = () => {

    return (
        
        <div className="allGroupes">
            {GroupeData.map(item => (
                <div className="groupe">
                    <h1>{item.name}</h1>
                    <p>Total : {item.nbPlaceTotal}</p>
                    <p>Occupées : {item.nbPlaceOccupied}</p>
                    { item.isBookable ? <p>Réservées : {item.nbPlaceBooked}</p> : <p>Pas de réservation possible</p> }
                </div>
            ))}
        </div>
    )
}

export default Groupe