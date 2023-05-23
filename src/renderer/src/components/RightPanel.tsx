import {useContext} from "react";
import {AppContext} from "../context/app/AppProvider";
import {AppActionType} from "../context/app/AppReducer";
import deploy from '../assets/img/deploy.svg'
import {Selector} from "./common/Selector";
import {Switch} from "./common/Switch";
import {CloseButton} from "./common/CloseButton";

export default function RightPanel(): JSX.Element {
    const [state, dispatch] = useContext(AppContext);

    const closeDropdown = async () => {
        await dispatch({
            type: AppActionType.SET_SELECTED_ZONE,
            payload: undefined
        })
    }

    return state.selectedZone ? (
        <div className="right-panel">
            <CloseButton  imgPath={deploy} onClick={closeDropdown}/>

            <h1>Zone {state.selectedZone.id}</h1>

            <div className="fields">
                <span className="field-text">Réservation</span>
                <Selector options={["Example", "Test", "OUI", "NON"]}/>

                <span className="field-text">Nombre de places</span>
                <input className="option-input" type="number" min="0"/>

                <span className="field-text">Table disponible</span>
                <Switch />

                <span className="field-text">Statut de nettoyage</span>
                <Selector options={["Clean", "Dirty"]}/>
            </div>
        </div>
    ) : (<div></div>)
}