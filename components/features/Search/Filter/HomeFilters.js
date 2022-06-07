import React, {useState} from 'react';
import SelectionInput from "../../../common/Selector/SelectionInput";
import price from '../../../../localJson/housePrice.json';
import purchase from '../../../../localJson/purchase.json';
import bedrooms from '../../../../localJson/bedrooms.json';
import {CartState} from "../../../../context/context";

function HomeFilters(props) {
    const { minPrice, setMinPrice, maxPrice, setMaxPrice , minPurchases, maxPurchases, minBedRooms, maxBedRooms, minBathRooms, maxBathRooms, handleMinPurchase,handleMaxPurchase,handleMinBedRooms, handleMaxBedRooms, handleMinBathRooms, handleMaxBathRooms } = CartState();

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
    function setHandleMinBedRooms(data) {
        handleMinBedRooms(data)
    }
    function setHandleMaxBedRooms (data) {
        handleMaxBedRooms(data)
    }
    function setHandleMinBathrooms(data) {
        handleMinBathRooms(data)
    }
    function setHandleMaxBathrooms (data) {
        handleMaxBathRooms(data)
    }
    return (
        <div>
            <hr/>
            <h3 className="selected-text mt-5">Price</h3>
            <div className="filter-div mt-5 mb-5">
                <SelectionInput title="min" items={price} setSelectedItem={setMinPriceValue} selectedItem={minPrice} />
                <SelectionInput title="Max" items={price} setSelectedItem={setMaxPriceValue} selectedItem={maxPrice}/>
            </div>
            <hr/>

            <h3 className="selected-text mt-5">No of Purchase</h3>
            <div className="filter-div mt-5 mb-5">
                <SelectionInput title="Min" items={purchase} setSelectedItem={setHandleMinPurchase} selectedItem={minPurchases} />
                <SelectionInput title="Max" items={purchase} setSelectedItem={setHandleMaxPurchase} selectedItem={maxPurchases} />
            </div>
            <hr/>

            <h3 className="selected-text mt-5">Bedrooms</h3>
            <div className="filter-div mt-5 mb-5">
                <SelectionInput title="Min" items={bedrooms} setSelectedItem={setHandleMinBedRooms} selectedItem={minBedRooms} />
                <SelectionInput title="Max" items={bedrooms} setSelectedItem={setHandleMaxBedRooms} selectedItem={maxBedRooms} />
            </div>
            <hr/>

            <h3 className="selected-text mt-5">Bathrooms</h3>
            <div className="filter-div mt-5 mb-5">
                <SelectionInput title="Min" items={bedrooms} setSelectedItem={setHandleMinBathrooms} selectedItem={minBathRooms}/>
                <SelectionInput title="Max" items={bedrooms} setSelectedItem={setHandleMaxBathrooms} selectedItem={maxBathRooms}/>
            </div>
            <hr/>
        </div>
    );
}

export default HomeFilters;