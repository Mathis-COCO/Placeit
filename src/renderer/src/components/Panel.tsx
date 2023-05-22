import logo from '../assets/img/logo.png'
import {useState} from "react";
import {Button} from "./common/Button";

export default function Panel(): JSX.Element {
    const [groups, setGroups] = useState<Array<string>>(["Group 1", "Group 2", "Group 3"]);

    const addGroup = () => {
        setGroups([...groups, "Nouveau groupe"])
    }

    return (
        <div className="left-bar">
            <div className="logo-content">
                <img className="logo" src={logo} alt="PlaceIt Logo"/>
            </div>
            <Button text={"Ajouter un groupe"} onClick={addGroup}/>
            <div className="groups-container">
                {
                    groups.map((group, index) => (
                        <p key={index} className='group-name'>{group}</p>
                    ))
                }
            </div>
        </div>
    )
}
