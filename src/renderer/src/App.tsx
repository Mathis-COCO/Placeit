import LeftBar from './components/LeftBar'
import {GroupProvider} from "./context/groups/GroupProvider";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <GroupProvider>
                <LeftBar/>
            </GroupProvider>
        </div>
    )
}
