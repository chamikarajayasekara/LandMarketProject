import React from 'react';
import VehicleAccessories from "../VehicleAccesories/VehicleAccessories";

const AccessorySelection = ({selectedVehicle,selectedVehicleModal,vehicleAccessory, selectedVehicleAccessory,setSelectedVehicleAccessory }) => {
    if (selectedVehicleModal === "Not Selected"){
        return  <div></div>
    }else{
       return <div>
            {
                selectedVehicle && selectedVehicleModal && vehicleAccessory ?
                    <div>
                        <div className="top-products mt-5 mb-5">
                            Accessory
                        </div>
                        <VehicleAccessories selectedVehicleAccessory={selectedVehicleAccessory} setSelectedVehicleAccessory={setSelectedVehicleAccessory} vehicleAccessory={vehicleAccessory}/>
                    </div>
                    :
                    null
            }
        </div>
    }
};

export default AccessorySelection;