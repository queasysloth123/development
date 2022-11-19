import './App.css';
import { useState } from "react";
import weaponsData from "./assets/weapons-data.json";
import WeaponItem from './components/WeaponItem';
import Slider from '@mui/material/Slider';
import CartItem from './components/CartIem';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faFilter, faCartShopping, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import logo from './imgs/logo.png';

const weaponInfo = [];
  weaponsData.data.forEach((weapon) => {
    if (weapon.displayName != "Melee") {
      weaponInfo.push({
        "name" : weapon.displayName,
        "cost": weapon.shopData.cost,
        "category": weapon.shopData.categoryText,
        "image": weapon.displayIcon,
        "fireRate": weapon.weaponStats.fireRate
      })
    }
  });
  weaponInfo.sort((a,b) => a.name.localeCompare(b.name));
  console.log(weaponInfo)

function App() {
  const [isCheckedSMGs, setIsCheckedSMGs] = useState(true);
  const [isCheckedHeavyWeapons, setIsCheckedHeavyWeapons] = useState(true);
  const [isCheckedAssaultRifles, setIsCheckedAssaultRifles] = useState(true);
  const [isCheckedShotguns, setIsCheckedShotguns] = useState(true);
  const [isCheckedSidearms, setIsCheckedSidearms] = useState(true);
  const [isCheckedSniperRifles, setIsCheckedSniperRifles] = useState(true);
  const [sortedWeaponData, setSortedWeaponData] = useState(weaponInfo)

  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const check = {
    "SMGs": [isCheckedSMGs, setIsCheckedSMGs],
    "Heavy Weapons": [isCheckedHeavyWeapons, setIsCheckedHeavyWeapons],
    "Assault Rifles": [isCheckedAssaultRifles, setIsCheckedAssaultRifles],
    "Shotguns": [isCheckedShotguns, setIsCheckedShotguns],
    "Sidearms": [isCheckedSidearms, setIsCheckedSidearms],
    "Sniper Rifles": [isCheckedSniperRifles, setIsCheckedSniperRifles]
  };

  const marks = [
    {
      value: 0,
      label: "1",
    },
    {
      value: 150,
    },
    {
      value: 450,
    },
    {
      value: 500,
    },
    {
      value: 800,
      label: "800"
    },
    {
      value: 850,
    },
    {
      value: 950,
    },
    {
      value: 1600,
    },
    {
      value: 1850,
    },
    {
      value: 2050,
      label: "2050"
    },
    {
      value: 2250,
    },
    {
      value: 2900,
    },
    {
      value: 3200,
    },
    {
      value: 4700,
      label: "4700"
    },
  ];

  const [costRange, setCostRange] = useState([0, 4700]);

  const handleChange = (event, newValue) => {
    setCostRange(newValue);
  };

  const [sortBy, setSortBy] = useState('name');

  const handleChangeFilter = (event, newValue) => {
    setSortBy(newValue);
    let toSort = [... sortedWeaponData];
    let type = String(newValue);
    toSort.sort((a,b) => String(a[type]).localeCompare(String(b[type])));
    setSortedWeaponData(toSort);
  };

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
  
  function resetFilters() {
    Object.keys(check).map(category => check[category][1](true));
    setCostRange([0, 4700]);
    handleChangeFilter(null, "name");
  }

  function clearCart() {
    setCart([]);
    setTotal(0);
  }
  const radioTheme = {
    '&.Mui-checked': {
      color: "#ff4655"
    }, marginLeft: "10px"};
  return (
    <div className="App">
      <div className='Filters'>
        <div className='SideHeaders'>
          <h2 className='filtersHeader'><FontAwesomeIcon icon={faFilter} size="2xs" /> Filters</h2>
          <Link href="#" className="Reset" onClick={() => resetFilters()}>Reset</Link>
        </div>
      <div className='Sort'>
        <Accordion sx={{backgroundColor:"transparent", boxShadow:"none"}}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{padding: "0"}}
            >
              <FormLabel>Sort By</FormLabel>
          </AccordionSummary>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="name"
              name="radio-buttons-group"
              onChange={handleChangeFilter}
              value={sortBy}>
              <FormControlLabel sx={{color:"#1a1a1a"}} value="name" control={<Radio sx={radioTheme} />} label="Name" />
              <FormControlLabel sx={{color:"#1a1a1a"}} value="cost" control={<Radio sx={radioTheme}/>} label="Cost" />
              <FormControlLabel sx={{color:"#1a1a1a"}} value="category" control={<Radio sx={radioTheme} />} label="Category" />
              <FormControlLabel sx={{color:"#1a1a1a"}} value="fireRate" control={<Radio sx={radioTheme}/>} label="Fire rate" />
            </RadioGroup>
          </FormControl>
        </Accordion>
      </div>
      <Divider />
      <div className='Prices'>
      <Accordion sx={{backgroundColor:"transparent", boxShadow:"none"}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{padding: "0"}}
          >
            <FormLabel>Price Range</FormLabel>
        </AccordionSummary>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={costRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1}
        max={4700}
        marks={marks}
        step={null}
        sx={{
          width: "calc(100% - 20px)",
          marginLeft: "10px",
          color: '#ff4655',
        }}
      />
      </Accordion>
      </div>
      <Divider />
      <div className='Categories'>
      {/* <FormLabel>Categories</FormLabel>  */}
      <Accordion sx={{backgroundColor:"transparent", boxShadow:"none"}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{padding: "0"}}
          >
            <FormLabel>Categories</FormLabel>
        </AccordionSummary>
        <FormGroup>
          {Object.keys(check).map(category => 
          <FormControlLabel 
          onChange={(event, value) => 
            check[category][1](value)} 
          control={<Checkbox checked={check[category][0]} sx={{
            '&.Mui-checked': {
              color: "#ff4655"
            },
            marginLeft: "10px"
          }}/>} sx={{color: '#1a1a1a'}} label={category} />)}
        </FormGroup>  
      </Accordion>
      </div>
      <Divider />
      <div className='Cart'>
        <div className='SideHeaders' id="CartHeader">
          <h2 className='filtersHeader'><FontAwesomeIcon icon={faCartShopping} size="2xs" /> Cart</h2>
          <Link href="#" className="Reset" onClick={() => clearCart()}>Clear</Link>
        </div>
      {Object.keys(cart).map(weapon => <CartItem count={cart[weapon]} name={weapon} img={getProp("image", weapon)} cost={getProp("cost", weapon)} incItem={incItem} decItem={decItem}></CartItem> )}
      </div>
      <h3>Total: <FontAwesomeIcon icon={faCoins} size="2xs" /> {total}</h3>
      <button className="ItemAddBtn" id="CheckoutBtn">CHECKOUT</button>
      </div>
      <div className="Items">
      <img className="Logo" src={logo}></img>
      <div className='ItemsWrapper'>
      {sortedWeaponData.map(item => (check[item.category][0] && item.cost >= costRange[0] && item.cost <= costRange[1])? <WeaponItem 
              name={item.name}
              category={item.category}
              cost={item.cost}
              img={item.image}
              fireRate={item.fireRate}
              addItem={() => addToCart(item.name)}></WeaponItem> : <></>)
        }
      </div>
      </div>
    </div>
  );
}

export default App;
