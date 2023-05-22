import {Action} from "../../types/ActionType";
import {GroupType} from "../../types/GroupType";

export interface GroupState {
    loading: boolean
    currentGroup: GroupType | undefined
    groups: Array<GroupType>
}

export const initialGroupState: GroupState = {
    loading: false,
    currentGroup: undefined,
    groups: [],
}

export enum GroupActionType {
    SET_LOADING = 'SET_LOADING',
    SET_CURRENT_GROUP = 'SET_CURRENT_GROUP',
    SET_GROUPS = 'SET_GROUPS',
    ADD_GROUP = 'ADD_GROUP',
    SET_ZONES = 'SET_ZONES',
}

export const GroupReducer = (state: GroupState, action: Action<GroupActionType>) => {
    switch (action.type) {
        case GroupActionType.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case GroupActionType.SET_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.payload,
            };
        case GroupActionType.SET_GROUPS:
            return {
                ...state,
                groups: action.payload,
            };
        case GroupActionType.ADD_GROUP:
            return {
                ...state,
                groups: [
                    ...state.groups,
                    action.payload,
                ],
            };
        case GroupActionType.SET_ZONES:
            return {
                ...state,
                currentGroup: {
                    ...state.currentGroup,
                    zones: action.payload
                },
                loading: false,
            };
        default:
            return state;
    }
}