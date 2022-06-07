import React from 'react';
import Image from 'next/image'
import pic1 from '../../../assets/search.svg'
function Cards1({explore}) {

    return (
        <div className="card1">
            <div className="card-img">
                <Image
                    src={explore.url}
                    alt="Picture of the author"
                    width="200px"
                    height="150px"
                />
            </div>
            <div className="card-content">
                <div className="card-content-heading">
                    {explore.heading}
                </div>
                <div className="card-content-details">
                    {explore.details}
                </div>
            </div>
        </div>
    );
}

export default Cards1;