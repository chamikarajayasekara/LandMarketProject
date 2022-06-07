import React, {useEffect, useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Link from 'next/link'
import CartHome from "./CartHome";
import {CartState} from "../../../context/context";
import EmptyCart from "./EmptyCart";

const CartDrawer = ({anchor,onClose,onOpen,open,toggleDrawer,state, products}) => {
    const commaNumber = require('comma-number')
    const { cart,total,count } = CartState();

    return (
        <div>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                <div className="drawer-box" >
                    <div className="drawer-header ">
                        <div className="flex flex-wrap ml-6">
                            <h2 className="cart-head mt-5 text-left">
                              My Shopping Bag
                            </h2>
                        </div>
                    </div>

                    {/*<div className="drawer-body relative">*/}
                    {/*    {*/}
                    {/*        cart.length === 0 ?*/}
                    {/*           null*/}
                    {/*            :*/}
                    {/*            <div>*/}
                    {/*                {*/}
                    {/*                    cart.map(*/}
                    {/*                        product=> <CartHome products={product} key={product._id}/>*/}
                    {/*                    )*/}
                    {/*                }*/}

                    {/*            </div>*/}
                    {/*    }*/}

                    {/*</div>*/}
                    {/*{*/}
                    {/*    cart.length === 0 ?*/}
                    {/*        <EmptyCart/>*/}
                    {/*        :*/}
                    {/*        <div className="drawer-footer">*/}
                    {/*            <div className="flex flex-wrap mb-2">*/}
                    {/*                <div className="cart-footer-left">*/}
                    {/*                    <div className="text-black text-left ml-4 ">*/}
                    {/*                        Sub Total*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="cart-footer-right">*/}
                    {/*                    <div className="text-black text-right  mr-6">*/}
                    {/*                        $ {commaNumber(total)}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex flex-wrap mb-6 ">*/}
                    {/*                <div className="cart-footer-left">*/}
                    {/*                    <div className="text-black text-left ml-4 ">*/}
                    {/*                        Shipping</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="cart-footer-right">*/}
                    {/*                    <div className="text-black text-right  mr-6">*/}
                    {/*                        Calculated during the checkout*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex flex-wrap ">*/}
                    {/*                <div className="cart-footer-left">*/}
                    {/*                    <div className="text-black text-left ml-4 font-bold">Total</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="cart-footer-right  ">*/}
                    {/*                    <div className="text-black text-right font-bold mr-6">*/}
                    {/*                        $ {commaNumber(total)}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex flex-wrap justify-center mt-8">*/}
                    {/*                <div className="checkout-btn ">*/}
                    {/*                    <p className="text-center mt-3">*/}
                    {/*                        <Link href="/checkout">*/}
                    {/*                        Proceed To Checkout*/}
                    {/*                        </Link>*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*}*/}
                </div>
            </SwipeableDrawer>
        </div>
    );
};

export default CartDrawer;