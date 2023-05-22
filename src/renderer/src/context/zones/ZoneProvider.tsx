import React, {createContext, Dispatch, PropsWithChildren, useReducer} from "react";
import {initialZoneState, ZoneActionType, ZoneReducer, ZoneState} from "./ZoneReducer";
import {Action} from "../../types/ActionType";

export const ZoneContext = createContext<[ZoneState, Dispatch<Action<ZoneActionType>>]>([
    initialZoneState,
    () => null,
]);

export const ZoneProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(ZoneReducer, initialZoneState)

    return (
        <ZoneContext.Provider value={[state, dispatch]}>
            {children}
        </ZoneContext.Provider>
    )
}
