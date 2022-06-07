import React, {useEffect, useState} from 'react';
import SelectionInput from "../../../common/Selector/SelectionInput";
import filterdata from '../../../../localJson/filterdata.json';
import price from '../../../../localJson/price.json';
import purchase from '../../../../localJson/purchase.json';
import {CartState} from "../../../../context/context";
function LandFilter(props) {
    const {  clearFilterData,  minPrice, setMinPrice, maxPrice, setMaxPrice,handleMinPurchase,handleMaxPurchase,   minPurchases, maxPurchases,} = CartState();

    useEffect(() =>{
        clearFilterData();
    },[])

    function setMinPriceValue(data) {
        setMinPrice(data);
    }

    function setMaxPriceValue(data) {
        setMaxPrice(data);
    }

    function setHandleMinPurchase(data) {
        handleMinPurchase(data)
    }

    function setHandleMaxPurchase (data) {
        handleMaxPurchase(data)
    }
    return (
        <div>
            <hr/>
            <h3 className="selected-text mt-5">Price</h3>
            <div className="filter-div mt-5 mb-5">
                <SelectionInput title="Min" items={price} setSelectedItem={setMinPriceValue} selectedItem={minPrice} />
                <SelectionInput title="Max" items={price} setSelectedItem={setMaxPriceValue} selectedItem={maxPrice}/>
            </div>
            <hr/>

            <h3 className="selected-text mt-5">No of Purchase</h3>
            <div className="filter-div mt-5 mb-5">
                <SelectionInput title="Min" items={purchase} setSelectedItem={setHandleMinPurchase} selectedItem={minPurchases} />
                <SelectionInput title="Max" items={purchase} setSelectedItem={setHandleMaxPurchase} selectedItem={maxPurchases} />
            </div>
            <hr/>
        </div>

    );
}

export default LandFilter;