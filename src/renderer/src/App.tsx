import Panel from './components/Panel'
import {GroupProvider} from "./context/groups/GroupProvider";
import InteractZones from "./components/Interact";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <GroupProvider>
                <Panel/>
                <div className='right-part'>
                    {/* <Options /> */}
                    <InteractZones />
                </div>
            </GroupProvider>
        </div>
    )
}