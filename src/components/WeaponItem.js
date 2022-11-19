import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

function WeaponItem(props) {
    return (
      <div className="WeaponItem">
        <div className='ItemTop'>
        <div className="ItemImg"> 
        <img src={props.img}></img>
        </div>
        <div className='ItemInfo'>
          <div className='ItemNameType'>
            <h1 className="ItemName">{props.name}</h1>
            <p className="ItemCategory">{props.category}</p>
            <p className="ItemFireRate">Fire rate: {props.fireRate}</p>
          </div>
          <h2 className="ItemCost"><FontAwesomeIcon icon={faCoins} size="2xs" /> {props.cost}</h2>
        </div>
        </div>
        <button className="ItemAddBtn" onClick={props.addItem}>BUY</button>
      </div>
    );
  }
  
  export default WeaponItem;
  