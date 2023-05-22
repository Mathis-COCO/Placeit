import logo from '../../../img/logo.png';
import '../assets/css/LeftBar.css'

function LeftBar(): JSX.Element {
    const zoneNames = ['zone1', 'zone2', 'zone3', 'zone4', 'zone5'];

    return (
        <div className="left-bar">
            <img className='logo' src={logo} alt="PlaceIt Logo" />
            <div className='center'>
                <button className='add-zone'>ajouter une zone</button>
            </div>
            <div className="zones-container">
                {zoneNames.map((name, index) => (
                    <p className='zone-name' key={index}>{name}</p>
                ))}
            </div>
        </div>
    )
}

export default LeftBar;