import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {makeStyles} from "@material-ui/core";
import {CartState} from "../../../context/context";

function SelectionInput({ setSelectedItem, items, selectedItem, title}) {

    const classes = useStyles();
    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    return (
        <div className="selected-menu">
            <FormControl fullWidth className={classes.second}>
                <InputLabel id="demo-simple-select-label"   >{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedItem}
                    label="Selected Vehicle"
                    onChange={handleChange}
                    className={classes.second}
                >
                    <MenuItem  value="Any" className={classes.root}>{"Any"}</MenuItem>
                    {
                        items?.map(item =>
                            <MenuItem className="menu-item" value={item.value} className={classes.root}>{item.value}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectionInput;

const useStyles = makeStyles({
    root: {
        display:"grid",
        textAlign:"left",
        justifyContent:"left",
        padding:"10px"
    },
    second:{
        width:"250px",
    }
});