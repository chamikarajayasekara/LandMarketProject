import React from 'react';
import Cards1 from "../Cards/Cards1";
import pic1 from '../../../assets/search.svg'
import explore from "../../../localJson/explore.json";
function ExploreSection(props) {
    return (
        <div className="explore">
            <div className="explore-header">
                <div className="desc">
                    {/*Explore Property*/}
                </div>
            </div>
            <div className="explore-section">
                {
                    explore.map((expl, key) =>
                        <Cards1  explore={expl} key={key}/>
                    )
                }
            </div>

        </div>
    );
}

export default ExploreSection;