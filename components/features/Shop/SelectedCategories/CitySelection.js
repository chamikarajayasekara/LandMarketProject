import React, {useEffect} from 'react';
import VehicleModals from "../VehicleModals/VehicleModals";
import ProductCategories from "../ProductCategories/ProductCategories";

const CitySelection = ({setItem,item, selectedItem, title}) => {

    return (
            <ProductCategories  setSelectedItem={setItem} items={item} selectedItem={selectedItem} title={title}/>
    );
};

export default CitySelection;