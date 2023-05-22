import Panel from './components/Panel'
import {GroupProvider} from "./context/groups/GroupProvider";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <GroupProvider>
                <Panel/>
            </GroupProvider>
        </div>
    )
}
