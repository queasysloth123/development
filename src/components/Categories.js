import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

function Categories(props) {
    return (
        <div className='Categories'>
                <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: "0" }}>
                        <FormLabel>Categories</FormLabel>
                    </AccordionSummary>
                    <FormGroup>
                        {Object.keys(props.checkedCategories).map(category =>
                            <FormControlLabel onChange={(event, value) => props.changeCheckedCategories(event, category, value)} control={
                                <Checkbox checked={props.checkedCategories[category]} sx={{
                                    '&.Mui-checked': {
                                        color: "#ff4655"
                                    },
                                    marginLeft: "10px"
                                }} />} sx={{ color: '#1a1a1a' }} label={category} />)}
                    </FormGroup>
                </Accordion>
            </div>
    )
}

export default Categories;
