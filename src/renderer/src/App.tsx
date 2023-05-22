import LeftBar from './components/LeftBar'
import {ZoneProvider} from "./context/zones/ZoneProvider";

export default function App(): JSX.Element {
    return (
        <div className="app">
            <ZoneProvider>
                <LeftBar/>
            </ZoneProvider>
        </div>
    )
}
