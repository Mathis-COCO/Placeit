import '../assets/css/components/FacilityManagement.css';
import hospital from '../assets/img/hospital.png';
import hotel from '../assets/img/hotel.png';
import others from '../assets/img/others.png';
import restaurant from '../assets/img/restaurant.png';
import personSitting from '../assets/img/person_sitting.png';

function FacilityManagement(): JSX.Element {
    const facilities = ['Hopital 1', 'Hotel 6'];

    return (
        <div className="facility-main">
            <div className="facility-container">
                <div>
                    <h1 className='facility-div-title'>bienvenue</h1>
                    <h2 className='facility-div-desc'>voici la liste de vos établissements</h2>
                </div>
                <div className='inline'>
                    {facilities.map((name, index) => (
                        <div key={index} className='facility-card'>
                            <img className='facility-card-img' src={hospital} alt="facility img" />
                            <p className='facility-card-txt'>{name}</p>
                        </div>
                    ))}
                    <button className='add-facility'>+</button>
                </div>
            </div>
            <img className='person-sitting' src={personSitting} alt="facility page illustration" />
        </div>

    )
}

export default FacilityManagement;