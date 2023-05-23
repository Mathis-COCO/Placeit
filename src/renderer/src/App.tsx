import Panel from './components/Panel'
import {GroupProvider} from "./context/groups/GroupProvider";
import InteractZones from "./components/Interact";
import RightPanel from "./components/RightPanel";
import {AppProvider} from "./context/app/AppProvider";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <AppProvider>
                <GroupProvider>
                    <Panel/>
                    <InteractZones />
                    <RightPanel />
                </GroupProvider>
            </AppProvider>
        </div>
    )
}