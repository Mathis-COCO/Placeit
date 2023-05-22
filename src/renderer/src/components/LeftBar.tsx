import logo from '../assets/img/logo.png'

export default function LeftBar(): JSX.Element {
    const zoneNames = ['zone1', 'zone2', 'zone3', 'zone4', 'zone5'];

    return (
        <div className="left-bar">
            <img className='logo' src={logo} alt="PlaceIt Logo" />
            <div>
                <button className='add-zone'>ajouter une zone principale</button>
            </div>
            <div className="zones-container">
                {zoneNames.map((name, index) => (
                    <p className='zone-name' key={index}>{name}</p>
                ))}
            </div>
            <div>
                <button className='add-zone add-zone-2'>ajouter la zone</button>
            </div>
        </div>
    )
}
