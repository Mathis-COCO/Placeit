import '../assets/css/components/AddFacility.css';
import hospital from '../assets/img/hospital.png';
import hotel from '../assets/img/hotel.png';
import others from '../assets/img/others.png';
import restaurant from '../assets/img/restaurant.png';
import maleMap from '../assets/img/male_with_map.png';

function AddFacility(): JSX.Element {
    return (
        <div className="facility-main">
            <div className="facility-container add-facilty-container">
                <div>
                    <h1 className='facility-div-title add-f-desc'>bienvenue</h1>
                    <h2 className='facility-div-desc add-f-desc'>Choisissez votre type d'établissement</h2>
                </div>
                <div className='grid2x2'>
                    <div className='facility-card-list'>
                        <img className='facility-card-img' src={restaurant} alt="facility img" />
                        <p className='facility-card-txt'>Restaurant</p>
                    </div>
                    <div className='facility-card-list'>
                        <img className='facility-card-img' src={hospital} alt="facility img" />
                        <p className='facility-card-txt'>Hopital</p>
                    </div>
                    <div className='facility-card-list'>
                        <img className='facility-card-img' src={hotel} alt="facility img" />
                        <p className='facility-card-txt'>Hotel</p>
                    </div>
                    <div className='facility-card-list'>
                        <img className='facility-card-img' src={others} alt="facility img" />
                        <p className='facility-card-txt'>autre</p>
                    </div>
                </div>
            </div>
            <img className='add-person-sitting' src={maleMap} alt="facility page illustration" />
        </div>

    )
}

export default AddFacility;