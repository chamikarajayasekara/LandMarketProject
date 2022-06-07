import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const VehicleAccessories = ({vehicleAccessory,selectedVehicleAccessory,setSelectedVehicleAccessory}) => {

    const handleChange = (event) => {
        setSelectedVehicleAccessory(event.target.value);
    };
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selected Vehicle Accessory</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedVehicleAccessory}
                    label="Selected Vehicle Accessory"
                    onChange={handleChange}
                >
                    <MenuItem value="Not Selected">{"Not Selected"}</MenuItem>
                    {
                        vehicleAccessory?.map(item =>
                            <MenuItem value={item.name}>{item.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default VehicleAccessories;