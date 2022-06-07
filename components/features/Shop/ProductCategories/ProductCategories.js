import * as React from 'react';

import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import {makeStyles} from "@material-ui/core";

const ProductCategories = ({ setSelectedItem, items, selectedItem, title}) => {
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    return (
        <div className="selected-menu">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedItem}
                    label="Selected Vehicle"
                    onChange={handleChange}
                    className="menu-item"
                >
                    <MenuItem  value="Any" className={classes.root}>{"Any"}</MenuItem>
                    {
                        items?.map((item, key) =>
                            <MenuItem key={key} value={item} className={classes.root}>{item}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>

    );
};

export default ProductCategories;


const useStyles = makeStyles({
    root: {
       display:"grid",
       textAlign:"left",
       justifyContent:"left",
        padding:"10px"
    },
});