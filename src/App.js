import './App.css';
import { useState } from "react";
import weaponsData from "./assets/weapons-data.json";
import WeaponItem from './components/WeaponItem';
import CartItem from './components/CartIem';

import Link from '@mui/material/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import logo from './imgs/logo.png';

import Filters from './components/Filters';

const weaponInfo = [];
weaponsData.data.forEach((weapon) => {
  if (weapon.displayName != "Melee") {
    weaponInfo.push({
      "name": weapon.displayName,
      "cost": weapon.shopData.cost,
      "category": weapon.shopData.categoryText,
      "image": weapon.displayIcon,
      "fireRate": weapon.weaponStats.fireRate
    })
  }
});

weaponInfo.sort((a, b) => a.name.localeCompare(b.name));

function App() {
  const [itemsToDisplay, setItemsToDisplay] = useState(weaponInfo);

  // Shopping Cart
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  function addToCart(name) {
    let newCart = cart;
    if (newCart[name] == undefined) {
      newCart[name] = 1
    } else {
      newCart[name] += 1
    }
    setCart(newCart);

    let itemCost = null;
    for (const weapon of weaponInfo) {
      if (weapon.name == name) {
        itemCost = weapon.cost;
      }
    }
    setTotal(current => current + itemCost)
  }

  // Other Functions
  function getProp(prop, name) {
    let queriedVal = null;
    for (const weapon of weaponInfo) {
      if (weapon.name == name) {
        queriedVal = weapon[prop];
      }
    }
    return queriedVal;
  }

  function incItem(name) {
    let newCart = cart;
    newCart[name] += 1
    setCart(newCart);

    let itemCost = null;
    for (const weapon of weaponInfo) {
      if (weapon.name == name) {
        itemCost = weapon.cost;
      }
    }
    setTotal(current => current + itemCost)
  }

  function decItem(name) {
    let newCart = cart;
    if (newCart[name] > 0) {
      newCart[name] -= 1
      setCart(newCart);

      let itemCost = null;
      for (const weapon of weaponInfo) {
        if (weapon.name == name) {
          itemCost = weapon.cost;
        }
      }
      setTotal(current => current - itemCost)
    }
  }

  function clearCart() {
    setCart([]);
    setTotal(0);
  }

  return (
    <div className="App">
        <div className='SideBar'>
          <Filters weaponInfo={weaponInfo} itemsToDisplay={itemsToDisplay} setItemsToDisplay={setItemsToDisplay}/>
          <div className='Cart'>
            <div className='SideHeaders' id="CartHeader">
              <h2 className='filtersHeader'><FontAwesomeIcon icon={faCartShopping} size="2xs" /> Cart</h2>
              <Link href="#" className="Reset" onClick={() => clearCart()}>Clear</Link>
            </div>
            {Object.keys(cart).map(weapon => 
              <CartItem 
                count={cart[weapon]} 
                name={weapon} 
                img={getProp("image", weapon)} 
                cost={getProp("cost", weapon)} 
                incItem={incItem} 
                decItem={decItem}>
              </CartItem>)}
          </div>
          <h3>Total: <FontAwesomeIcon icon={faCoins} size="2xs" /> {total}</h3>
        <button className="ItemAddBtn" id="CheckoutBtn">CHECKOUT</button>
        </div>
      <div className="Items">
        <img className="Logo" src={logo}></img>
        <div className='ItemsWrapper'>
          {itemsToDisplay.map(item => <WeaponItem
            name={item.name}
            category={item.category}
            cost={item.cost}
            img={item.image}
            fireRate={item.fireRate}
            addItem={() => addToCart(item.name)}></WeaponItem>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
