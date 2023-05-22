import logo from '../assets/img/logo.png'
import {useContext} from "react";
import {Button} from "./common/Button";
import {GroupContext} from "../context/groups/GroupProvider";
import {GroupActionType} from "../context/groups/GroupReducer";

export default function Panel(): JSX.Element {
    const [state, dispatch] = useContext(GroupContext)

    const addGroup = () => {
        dispatch({
            type: GroupActionType.ADD_GROUP,
            payload: {
                label: "Nouveau groupe",
                zones: []
            },
        });
    }

    const openGroup = () => {
            dispatch({
            type: GroupActionType.SET_CURRENT_GROUP,
            payload: {
                label: "Nouveau groupe",
                zones: [
                    {
                        id: 1,
                        totalPlaces: 10,
                        reservedPlaces: 2,
                        occupiedPlaces: 3,
                    }
                ]
            },
        });
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
                        <p key={index} className='group-name' onClick={openGroup}>{group.label}</p>
                    ))
                }
            </div>
        </div>
    )
}
