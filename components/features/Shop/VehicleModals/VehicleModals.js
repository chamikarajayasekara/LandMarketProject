import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const VehicleModals = ({selectedVehicleModal, setSelectedVehicleModal, vehicleModal}) => {

    const handleChange = (event) => {
        setSelectedVehicleModal(event.target.value);
    };
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selected Vehicle Modal</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedVehicleModal}
                    label="Selected Vehicle Modal"
                    onChange={handleChange}
                >
                    <MenuItem value="Not Selected">{"Not Selected"}</MenuItem>
                    {
                        vehicleModal?.map(vehicle =>
                            <MenuItem value={vehicle.name}>{vehicle.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default VehicleModals;