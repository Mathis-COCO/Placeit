import {Action} from "../../types/ActionType";

export interface ZoneState {
    loading: boolean
    zones: Array<string>
}

export const initialZoneState: ZoneState = {
    loading: false,
    zones: []
}

export enum ZoneActionType {
    SET_LOADING = 'SET_LOADING',
    SET_ZONES = 'SET_ZONE',
    ADD_ZONE = 'ADD_ZONE'
}

export const ZoneReducer = (state: ZoneState, action: Action<ZoneActionType>) => {
    switch (action.type) {
        case ZoneActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case ZoneActionType.SET_ZONES:
            return {
                ...state,
                zones: action.payload,
                loading: false,
            };
        case ZoneActionType.ADD_ZONE:
            return {
                ...state,
                zones: [
                    action.payload,
                    ...state.zones,
                ],
            };
        default:
            return state;
    }
}