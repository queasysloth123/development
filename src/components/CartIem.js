import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faCirclePlus, faCircleMinus, faSquarePlus, faSquareMinus, faC} from '@fortawesome/free-solid-svg-icons';

function CartItem(props) {
    return (
      <div className="CartItem">
        <div className="CartItemWrapper">
        {/* <span><b>{props.name}</b></span> */}
        <div className="CartItemImg">
          <img src={props.img}></img>
        </div>
        <div className="CartItemInfo">
            <span><b>{props.name}</b></span>
            <br></br>
            <div className='CartItemPrice'><FontAwesomeIcon size="xs" icon={faCoins}/> {props.cost}</div>
            <div className="ChangeQuantity">
              <div className="qtyBtn" >
                <FontAwesomeIcon color="#ff4655" size="lg" icon={faSquareMinus} onClick={() => props.decItem(props.name)}/>
              </div>
              <div>{props.count}</div>
              <div className="qtyBtn" >
                <FontAwesomeIcon color="#ff4655" size="lg" icon={faSquarePlus} onClick={() => props.incItem(props.name)}/>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default CartItem;
  