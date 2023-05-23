import {ZoneType} from "./ZoneType";

export interface GroupType {
    id: number,
    label: string
    zones: Array<ZoneType>
}