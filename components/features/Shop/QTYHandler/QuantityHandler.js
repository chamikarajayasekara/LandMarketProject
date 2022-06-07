import React, {useState} from 'react';

const QuantityHandler = () => {
    const [qty,setQty] = useState(1);

    function addCount() {
        setQty(qty + 1)
    }

    function minusCount() {
        if (qty > 1){
            setQty(qty -1)
        }
    }
    return (
        <div>
            <div className="flex flex-wrap justify-start mt-5 mb-5">
                <div className="decrement-btn rounded-full relative" onClick={e => minusCount()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inc-btn-icon  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </div>
                <div className="qty ml-2 mr-2">{qty}</div>
                <div className="increment-btn rounded-full relative" onClick={e => addCount()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  inc-btn-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default QuantityHandler;