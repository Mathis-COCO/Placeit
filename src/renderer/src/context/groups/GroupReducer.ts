import {Action} from "../../types/ActionType";

export interface GroupState {
    loading: boolean
    zones: Array<string>
}

export const initialGroupState: GroupState = {
    loading: false,
    zones: []
}

export enum GroupActionType {
    SET_LOADING = 'SET_LOADING',
    SET_ZONES = 'SET_ZONE',
    ADD_ZONE = 'ADD_ZONE'
}

export const GroupReducer = (state: GroupState, action: Action<GroupActionType>) => {
    switch (action.type) {
        case GroupActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case GroupActionType.SET_ZONES:
            return {
                ...state,
                zones: action.payload,
                loading: false,
            };
        case GroupActionType.ADD_ZONE:
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