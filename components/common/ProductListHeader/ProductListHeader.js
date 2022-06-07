import React, {useEffect, useState} from 'react';
import {CartState} from "../../../context/context";

function ProductListHeader({items}) {
    const {lands, activeTab, selectedDistrict, selectedCities,     minPrice, maxPrice,  minPurchases, maxPurchases, filterBedRooms, filterBathRooms, } = CartState();
    const [header, setHeader] = useState();
    useEffect(()=>{
        if(activeTab === "lands"){
            if(selectedDistrict && !selectedCities){
                setHeader(`Lands for Sale in ${selectedDistrict}`)
            }else if(selectedDistrict && selectedCities){
                setHeader(`Lands for Sale in ${selectedDistrict} - ${selectedCities}`)
            }else if(!selectedDistrict && !selectedCities && minPrice && maxPrice &&  !minPurchases && !maxPurchases ){
                setHeader(`Lands for Sale in prices between Rs.${minPrice} - Rs.${maxPrice}`)
            }else if(!selectedDistrict && !selectedCities && !minPrice && !maxPrice &&  minPurchases && maxPurchases){
                setHeader(`Lands for Sale in land size between ${minPurchases} P - ${maxPurchases} P`)
            }
            else if(!selectedDistrict && !selectedCities && minPrice && maxPrice &&  minPurchases && maxPurchases){
                setHeader(`Lands for Sale in prices between Rs.${minPrice} - Rs.${maxPrice} & land size between ${minPurchases} P - ${maxPurchases} P`)
            }
            else{
                setHeader(`Lands for Sale`)
            }
        }else{

        }
    },[])
    return (
        <div className="mb-3">
            <div className="results-heading mb-2">
                {header}
            </div>
            <div className="results-sub">
                {items} results
            </div>
        </div>
    );
}

export default ProductListHeader;