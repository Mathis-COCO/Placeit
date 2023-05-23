import Panel from './components/Panel'
import {GroupProvider} from "./context/groups/GroupProvider";
import InteractZones from "./components/Interact";
import RightPanel from "./components/RightPanel";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <GroupProvider>
                <Panel/>
                <InteractZones />
                <RightPanel />
            </GroupProvider>
        </div>
    )
}