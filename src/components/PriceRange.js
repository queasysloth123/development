import Slider from '@mui/material/Slider';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormLabel from '@mui/material/FormLabel';

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

function PriceRange(props) {
    return (
        <div className='Prices'>
            <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: "0" }}>
                    <FormLabel>Price Range</FormLabel>
                </AccordionSummary>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={props.costRange}
                    onChange={props.changePriceRange}
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
        </div>)
}

export default PriceRange;
