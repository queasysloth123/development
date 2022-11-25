import { useEffect, useState } from "react";

import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import SortBy from "./SortBy";
import PriceRange from "./PriceRange";
import Categories from "./Categories";


function Filters(props) {
    const weaponInfo = props.weaponInfo
    // Sort By
    const [sortBy, setSortBy] = useState('name');
    const changeSortBy = (event, newValue) => {
        setSortBy(newValue);
    };

    // Price Range
    const [costRange, setCostRange] = useState([0, 4700]);
    const changePriceRange = (event, newValue) => {
        setCostRange(newValue);
    };

    // Categories
    let categories = {}
    weaponInfo.map(weapon => categories[weapon.category] = true);
    const [checkedCategories, setCheckedCategories] = useState(categories);
    const changeCheckedCategories = (event, category, newValue) => {
        let categoriesCopy = {...checkedCategories};
        categoriesCopy[category] = newValue;
        setCheckedCategories(categoriesCopy);
    };

    // Other Functions
    useEffect(() => {
        let toSort = [...weaponInfo];
        if (sortBy == "cost" || sortBy == "fireRate") {
            toSort.sort((a, b) =>a[sortBy] - b[sortBy]);
        } else {
            toSort.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        }
        props.setItemsToDisplay(toSort.filter(item => (checkedCategories[item.category] && item.cost >= costRange[0] && item.cost <= costRange[1])));
    }, [sortBy, checkedCategories, costRange])

    function resetFilters() {
        setCheckedCategories(categories);
        setCostRange([0, 4700]);
        changeSortBy(null, "name");
    }
    return (
        <div className='Filters'>
            <div className='SideHeaders'>
                <h2 className='filtersHeader'><FontAwesomeIcon icon={faFilter} size="2xs" /> Filters</h2>
                <Link href="#" className="Reset" onClick={() => resetFilters()}>Reset</Link>
            </div>
            <SortBy sortBy={sortBy} changeSortBy={changeSortBy}/>
            <Divider />
            <PriceRange costRange={costRange} changePriceRange={changePriceRange}/>
            <Divider />
            <Categories checkedCategories={checkedCategories} changeCheckedCategories={changeCheckedCategories} />
            <Divider />
        </div>
    );
}

export default Filters;
