import React from 'react';
import {FaShoppingBag} from "react-icons/fa";

const EmptyCart = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span>Empty Cart</span>
            <FaShoppingBag color="action" className="h-6 w-6 mt-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </div>

    );
};

export default EmptyCart;