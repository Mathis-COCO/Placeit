import logo from '../assets/img/logo.png'
import {useState} from "react";
import {Button} from "./common/Button";

export default function LeftBar(): JSX.Element {
    const [zones, setZones] = useState<Array<string>>(["Zone 1", "Zone 2", "Zone 3"]);

    const addZone = () => {
        setZones([...zones, "Nouvelle Zone"])
    }

    return (
        <div className="left-bar">
            <div className="logo-content">
                <img className="logo" src={logo} alt="PlaceIt Logo"/>
            </div>
            <Button text={"Ajouter une zone"} onClick={addZone}/>
            <div className="zones-container">
                {
                    zones.map((zone, index) => (
                        <p key={index} className='zone-name'>{zone}</p>
                    ))
                }
            </div>
        </div>
    )
}
