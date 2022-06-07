import React from 'react';
import {FaBed, FaBath, FaParking, FaSolarPanel, FaSwimmingPool} from "react-icons/fa";

function ProductExtraDetails({singleItem}) {
    return (
        <div>
            <div className="minor-data">
                {
                    singleItem.bedRooms ?     <div className="icon-data"><FaBed/>{singleItem.bedRooms}</div> : null

                }
                {
                    singleItem.bathRooms ?     <div className="icon-data"><FaBath/>{singleItem.bathRooms}</div> : null
                }
                {
                    singleItem.garage && singleItem.garage === true ?     <div className="icon-data "><FaParking/>Yes</div> :  null
                }
                {
                    singleItem.solar && singleItem.solar === true ?     <div className="icon-data"><FaSolarPanel/>Yes</div> : null
                }
                {
                    singleItem.swimmingPool && singleItem.swimmingPool === true ?     <div className="icon-data"><FaSwimmingPool/>Yes</div> :  null
                }
            </div>
        </div>
    );
}

export default ProductExtraDetails;