import Total from "./components/Total"
import "./assets/index.css"
import Groupe from "./components/Groupe"

function App(): JSX.Element {
  return (
    <div className="container">
      <Total />
      <Groupe />
    </div>
  )
}

export default App
