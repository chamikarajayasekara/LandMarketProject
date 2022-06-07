import React from 'react';
import OrderDetailsFormHome from "../../components/features/Checkout/OrderDetailsFormHome";
import PlaceOrder from "../../components/features/Checkout/PlaceOrder";

const Index = () => {
    return (
        <div className="min-h-screen mt-6">
            <div className="flex flex-wrap personal-tab">
                <div className="w-full md:w-1/12 "></div>
                <div className="w-full md:w-6/12">
                    <OrderDetailsFormHome/>
                </div>
                <div className="w-full md:w-4/12 ml-2">
                    <PlaceOrder/>
                </div>
                <div className="w-full md:w-1/12"></div>
            </div>
        </div>
    );
};

export default Index;