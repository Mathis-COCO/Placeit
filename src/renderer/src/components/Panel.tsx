import logo from '../assets/img/logo.png'
import zone from '../assets/img/zone.svg'
import cog from '../assets/img/cog.svg'
import {useContext, useState} from "react";
import {Button} from "./common/Button";
import {GroupContext} from "../context/groups/GroupProvider";
import {GroupActionType} from "../context/groups/GroupReducer";
import {ImgButton} from "./common/ImgButton";
import {render} from "react-dom";
import Options from "./Options";

export default function Panel(): JSX.Element {
    const [state, dispatch] = useContext(GroupContext)
    const [groupCount, setGroupCount] = useState(1)
    const [zoneCount, setZoneCount] = useState(1)

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

    return (
        <div className="left-bar">
            <div className="content">
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
            </div>
            <div className="bottom">
                <ImgButton imgPath={zone} onClick={addZone}/>
                <div className="config">
                    <ImgButton imgPath={cog} onClick={() => render(<Options />, document.getElementById('root'))}/>
                </div>
            </div>
        </div>
    )
}
