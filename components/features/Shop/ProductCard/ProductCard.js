import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import {FaCartPlus, FaLocationArrow, FaShoppingBag} from 'react-icons/fa';
import {CartState} from "../../../../context/context";
const ProductCard = ({product, url}) => {
    const { handleSetSingleItem } = CartState();
    const [open, setOpen] = React.useState(false);

    function handleShopSingleItem() {
        handleSetSingleItem(product);
    }

    return (
        <div onClick={handleShopSingleItem}>
            <Link href={`/${url}/`+ product._id} key={product._id} >
            <div className="card mt-5" onClick={e => setOpen(true)}>
                <div className="card-heading">
                    <h1 className="card-heading-text">{product.heading}</h1>
                </div>
                <div className="img-div">
                    <div className='imageWrapper'>
                        <Image
                            alt="The guitarist in the concert."
                            src={product.images[1].url}
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="card-footer mt-5 mb-5">
                    <h5 className="product-name-card mt-2">
                        <FaLocationArrow className="ml-5 mr-5"/> <span className="card-text-1"> {product.address}</span>
                    </h5>
                    <h5 className="product-name-card mt-2">
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-real-state-real-estate-flatart-icons-outline-flatarticons.png" className="icons ml-5 mr-5"/>
                        <span className="card-text-1"> {product.purchase} P</span>
                        <img src="https://img.icons8.com/ios/50/000000/price-tag-euro.png" className="icons ml-5 mr-5"/>
                        <span className="card-text-1"> LKR. {product.price} </span>
                    </h5>
                </div>
            </div>
            {/*<div className="flex flex-wrap justify-center" onClick={e => addToCart(cartAddingProduct) }>*/}
            {/*    <button className="btn-addTocart relative rounded-full" title="Add to bag">*/}
            {/*        <FaShoppingBag className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<ProductDescriptionHome open={open} setOpen={setOpen} product={product}/>*/}
            </Link>
        </div>
    );
};

export default ProductCard;