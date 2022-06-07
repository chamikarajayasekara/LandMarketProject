import React from 'react';
import {FaShoppingBag} from "react-icons/fa";
import CartDrawer from "./CartDrawer";
import {productsLIST} from "../../../mock/products";
import {CartState} from "../../../context/context";
import {Badge} from "@mui/material";

const ShopCartWrapper = () => {
    const { cart } = CartState();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    return (
        <div>
            <div>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/*<Badge badgeContent={cart.length} color="primary" className="" >*/}
                        {/*    <div className="cart ml-4  relative rounded-lg"  onClick={toggleDrawer(anchor, true)}>*/}
                        {/*        <FaShoppingBag color="action" className="h-6 w-6 cursor-pointer text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>*/}
                        {/*    </div>*/}
                        {/*</Badge>*/}
                        <CartDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                            toggleDrawer={toggleDrawer}
                            state={state}
                            products={productsLIST}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ShopCartWrapper;