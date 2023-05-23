import {createContext, Dispatch, FC, PropsWithChildren, useReducer} from "react";
import {initialGroupState, GroupActionType, GroupReducer, GroupState} from "./GroupReducer";
import {Action} from "../../types/ActionType";

export const GroupContext = createContext<[GroupState, Dispatch<Action<GroupActionType>>]>([
    initialGroupState,
    () => null,
]);

export const GroupProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(GroupReducer, initialGroupState)

    return (
        <GroupContext.Provider value={[state, dispatch]}>
            {children}
        </GroupContext.Provider>
    )
}
