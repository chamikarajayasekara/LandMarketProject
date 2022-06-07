import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Section, {SectionColumn} from "../../layouts/container/sections/sections";
import VehicleSelection from "../../components/features/Shop/SelectedCategories/DistrictSelection";
import CitySelection from "../../components/features/Shop/SelectedCategories/CitySelection";
import AccessorySelection from "../../components/features/Shop/SelectedCategories/AccessorySelection";
import ProductCard from "../../components/features/Shop/ProductCard/ProductCard";
import {getUniversalCategories, getUniversalItems} from "../../apis/product.apis.helper";
import {CartState} from "../../context/context";
import Loader from "../../components/common/Loader/loader";
import {RouteContextState} from "../../context/RouteContext";

Index.propTypes = {
    
};

function Index(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const {universalItems, setUniversalItems,universalCategories, handleSetUniversalCategories} = CartState();
    const {currentRoute, prevRoute} = RouteContextState();
    useEffect(async ()=>{
        await getUniversalItems(selectedItem).then(r => setUniversalItems(r));
        await getUniversalCategories().then(r => handleSetUniversalCategories(r));
    },[])
    return (
        <div className="mt-8">
            <Section className=" mb-5 shop-container ">
                <SectionColumn className="search-col">
                    <VehicleSelection item={universalCategories} setItem={setSelectedItem} dropdownName={"Categories"} />
                    {/*<CitySelection selectedVehicle={selectedVehicle} selectedVehicleModal={selectedVehicleModal} setSelectedVehicleModal={setSelectedVehicleModal}  vehicleModal={vehicleModal}/>*/}
                    {/*<AccessorySelection selectedVehicle={selectedVehicle}  selectedVehicleModal={selectedVehicleModal}  vehicleAccessory={vehicleAccessory} selectedVehicleAccessory={selectedVehicleAccessory} setSelectedVehicleAccessory={setSelectedVehicleAccessory}/>*/}
                </SectionColumn>

                <SectionColumn className=" product-col">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-4">

                        {

                            universalItems === null || universalItems === undefined ?
                                <div>
                                    <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Loader/>
                                    </div>
                                </div>
                            :
                                universalCategories && universalItems && universalItems.map((product) =>(
                                <div key={product._id}>
                                    <ProductCard product={product} url={"universal-products"}/>
                                </div>
                            ))
                        }
                    </div>
                </SectionColumn>
            </Section>
        </div>
    );
}

export default Index;