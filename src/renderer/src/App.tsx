import LeftBar from './components/LeftBar'
import Options from './components/Options'
import '../src/assets/css/index.css'
import InteractZones from './components/Interact'

function App(): JSX.Element {
  return (
    <div className="container">
      <LeftBar />
      <div className='right-part'>
        {/* <Options /> */}
        <InteractZones />
      </div>
    </div>
  )
}

export default App
