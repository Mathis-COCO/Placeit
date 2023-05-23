import {ZoneType} from "../../types/ZoneType";
import {Action} from "../../types/ActionType";

export interface AppState {
    loading: boolean
    selectedZone: ZoneType | undefined
}

export const initialAppState: AppState = {
    loading: false,
    selectedZone: undefined
}

export enum AppActionType {
    SET_LOADING = 'SET_LOADING',
    SET_SELECTED_ZONE = 'SET_SELECTED_ZONE'
}

export const AppReducer = (state: AppState, action: Action<AppActionType>) => {
    switch (action.type) {
        case AppActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case AppActionType.SET_SELECTED_ZONE:
            return {
                ...state,
                selectedZone: action.payload,
            };
        default:
            return state;
    }
}