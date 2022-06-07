import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {CartState} from "../../../context/context";
import {FaClosedCaptioning, FaShoppingBag} from "react-icons/fa";

const CartHome = ({products}) => {
    const commaNumber = require('comma-number')
    const { removeCart , changeQuantity} = CartState();
    const [item, setItem] = useState()
    //due to lack of data upadate
    const [quantity, setQuantity] = useState(1);
    //create a local product and set to item and it displays the cart item, due to couldn't update properly by context
    let cartItem = {
        category: products.category,
        description: products.description,
        imgUrl: products.imgUrl,
        name: products.name,
        price: products.price,
        quantity:  products.quantity,
        _id: products._id,
    }

    useEffect(()=>{
        setItem(cartItem)
    },[])

    const handleIncrement = () =>{
        changeQuantity("increment", products._id);
        item["quantity"] = parseInt(item["quantity"]) + 1;
        //directly didn't update through the Context and Local state
        setQuantity(parseInt(item["quantity"]) + 1)
    }

    const handleDecrement = () =>{
        changeQuantity("decrement",  products._id)
        if (item["quantity"] > 1 ){
            item["quantity"] = parseInt(item["quantity"]) - 1;
            //directly didn't update through the Context and Local state
            setQuantity(parseInt(item["quantity"]) - 1)
        }
    }
    function renderItems() {
        if (item){
            return <div className="single-cart-item">
                <div className="flex flex-wrap justify-center cart-line-1">
                    <div className="cart-img 0">
                        <Image
                            alt="The guitarist in the concert."
                            src={item?.imgUrl}
                            width={140}
                            height={140}
                            layout="intrinsic"
                        />
                    </div>
                    <div className="cart-details mt-10">
                        <div className="cart-head-2">
                            {item?.name}
                        </div>

                    </div>
                    <div className="cart-price mt-10">
                       $ {commaNumber(item?.price)}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="close-icon-box mb-2 ">
                        <div className="cart-remove-item ml-4 " onClick={e => removeCart(products)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="close-icon h-6 w-6 cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="cart-quantity-changer ">
                        <div className="flex flex-wrap">
                            <div className="cart-item-quantity">
                                <div className="item-count ">
                                    <h3 className="ml-4 text-black font-semibold"> {item?.quantity}</h3>
                                </div>
                            </div>
                            <div className="quantity-increment-btn">
                                <div className="plus-button" onClick={e => handleIncrement()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="quantity-decrement-btn" onClick={e => handleDecrement()}>
                                <div className="minus-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 12H4" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }else{
            return  null;
        }

    }

    return renderItems()
};

export default CartHome;