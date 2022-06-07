import React, {useEffect} from 'react';
import VehicleSelection from "../../Shop/SelectedCategories/DistrictSelection";
import {CartState} from "../../../../context/context";
import {
    getCitiesFromAPI,
    getDistrictsFromAPI, getHousesFromApi, getLandsFromApi,
} from "../../../../apis/product.apis.helper";
import {Button} from "@material-ui/core";
import DistrictSelection from "../../Shop/SelectedCategories/DistrictSelection";
import CitySelection from "../../Shop/SelectedCategories/CitySelection";
import FilterModal from "../../../common/Modal/Modal";
import {useRouter} from "next/router";
import {homeQueryParams, landQueryParams} from "../../../../helpers/setQueryDataHome";

function InputBase({activeTabDetails}) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const { minPurchases, maxPurchases,setActiveTab, clearFilterData,handleSetSelectedCity, districts,cities,  filteredCities,  selectedDistrict, selectedCities, setSelectedCities,handleSetCities, getCitiesByDistricts ,minPrice,  maxPrice,filterPurchases, filterBedRooms, filterBathRooms,handleSetLands, handleSetHouses, handleSetSelectedDistrict, minBedRooms, maxBedRooms, minBathRooms, maxBathRooms } = CartState();

    const handleClickOpen = () => {
        clearFilterData();
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(async() =>{
        setActiveTab(activeTabDetails);
    },[])

    useEffect(() =>{
        if(selectedDistrict !== null){
            getCitiesByDistricts(selectedDistrict);
        }
    },[selectedDistrict])

   async function getResults() {
        if (activeTabDetails === "lands"){
            let paramValues = landQueryParams(selectedDistrict, selectedCities, minPrice, maxPrice,  minPurchases, maxPurchases);
            await getLandsFromApi(paramValues).then(r => handleSetLands(r));
        }else{
            let paramValues = homeQueryParams(selectedDistrict, selectedCities, minPrice, maxPrice,  minPurchases, maxPurchases, minBedRooms, maxBedRooms, minBathRooms, maxBathRooms);
            await getHousesFromApi(paramValues).then(r => handleSetHouses(r));
        }
       router.push('/shop');
    }
    return (
        <div className="test-div">
            <div className="test-clz">
                <DistrictSelection item={districts} setItem={handleSetSelectedDistrict}  selectedItem={ selectedDistrict} title={"District"}/>
            </div>
            <div className="test-clz">
                <CitySelection item={ filteredCities} setItem={ handleSetSelectedCity} selectedItem={selectedCities}  title={"City"}/>
            </div>
            <div className="test-clz-btn">
                <Button variant="outlined" onClick={handleClickOpen} color="secondary" className="search-btn">
                    filter
                </Button>
                <FilterModal open={open} setOpen={setOpen} handleClose={handleClose} tabValue={activeTabDetails} getResults={getResults}/>
            </div>
            <div className="test-clz-btn">
                <Button variant="outlined" onClick={getResults} color="primary" className="search-btn">Search</Button>
            </div>
        </div>
    );
}

export default InputBase;