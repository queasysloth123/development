import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'

const radioTheme = {
    '&.Mui-checked': {
        color: "#ff4655"
    }, marginLeft: "10px"
};

function SortBy(props) {
    return (
        <div className='Sort'>
            <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ padding: "0" }}>
                    <FormLabel>Sort By</FormLabel>
                </AccordionSummary>
                <FormControl>
                    <RadioGroup
                        defaultValue="name"
                        name="radio-buttons-group"
                        onChange={props.changeSortBy}
                        value={props.sortBy}>
                        <FormControlLabel sx={{ color: "#1a1a1a" }} value="name" control={<Radio sx={radioTheme} />} label="Name" />
                        <FormControlLabel sx={{ color: "#1a1a1a" }} value="cost" control={<Radio sx={radioTheme} />} label="Cost" />
                        <FormControlLabel sx={{ color: "#1a1a1a" }} value="category" control={<Radio sx={radioTheme} />} label="Category" />
                        <FormControlLabel sx={{ color: "#1a1a1a" }} value="fireRate" control={<Radio sx={radioTheme} />} label="Fire rate" />
                    </RadioGroup>
                </FormControl>
            </Accordion>
        </div>)
}

export default SortBy;
