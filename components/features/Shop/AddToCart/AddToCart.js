import React from 'react';
import {FaShoppingBag} from "react-icons/fa";

const AddToCart = () => {
    return (
        <div>
                <button className="btn-addTocart-desc relative rounded-2xl " title="Add to bag">
                    <div className="flex flex-wrap justify-center">
                        <FaShoppingBag className="h-6 w-6 mr-4"/>
                        <h3>
                            Add To Bag
                        </h3>
                    </div>
                </button>
        </div>
    );
};

export default AddToCart;