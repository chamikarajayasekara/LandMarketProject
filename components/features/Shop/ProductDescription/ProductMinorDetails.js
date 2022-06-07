import React from 'react';
import {FaBed } from "react-icons/fa";

function ProductMinorDetails({singleItem}) {
    return (
        <div>
            <div className="icon-items">
                <div className="sub-heading">Land Size</div> <div className="sub-head-desc">{singleItem && singleItem.purchase} P</div>
            </div>
            <div className="icon-items">
                <div className="sub-heading">Land Type</div> <div className="sub-head-desc"> {singleItem && singleItem.land_type} </div>
            </div>
            <div className="icon-items">
                <div className="sub-heading">Plan</div> <div className="sub-head-desc"> {singleItem && singleItem.Plan} </div>
            </div>
            <div className="icon-items">
                <div className="sub-heading">Electricity</div> <div className="sub-head-desc"> {singleItem && singleItem.Electricity} </div>
            </div>
            <div className="icon-items">
                <div className="sub-heading">Water</div> <div className="sub-head-desc"> {singleItem && singleItem.water} </div>
            </div>
            <div className="icon-items">
                <div className="sub-heading">Price</div> <div className="sub-head-desc"> LKR {singleItem && singleItem.price} </div>
            </div>
        </div>
    );
}

export default ProductMinorDetails;