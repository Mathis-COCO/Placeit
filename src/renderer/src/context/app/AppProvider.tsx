import {createContext, Dispatch, FC, PropsWithChildren, useReducer} from "react";
import {AppActionType, AppReducer, AppState, initialAppState} from "./AppReducer";
import {Action} from "../../types/ActionType";

export const AppContext = createContext<[AppState, Dispatch<Action<AppActionType>>]>([
    initialAppState,
    () => null,
]);

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialAppState)

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}