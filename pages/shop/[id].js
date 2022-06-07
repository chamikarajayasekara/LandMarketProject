import {useRouter} from "next/router";
import {RouteContextState} from "../../context/RouteContext";
import {useEffect, useState} from "react";
import {getSingleProductData} from "../../apis/product.apis.helper";
import {CartState} from "../../context/context";
import { FaBed } from "react-icons/fa";
import ProductGallery from "../../components/features/Shop/ProductGallery/ProductGallery";
import SideBar from "../../components/features/Shop/ProductDescription/SideBar";
import ProductMinorDetails from "../../components/features/Shop/ProductDescription/ProductMinorDetails";
import ProductExtraDetails from "../../components/features/Shop/ProductDescription/ProductExtraDetails";

const Details = () =>{
    const { handleSetSingleItem , singleItem} = CartState();
    const router = useRouter();

    useEffect(async  () => {
        let product = localStorage.getItem('product');
        product = JSON.parse(product);
        let now = new Date();
        console.log(product);
        if(localStorage.getItem('product')){
            if( product.product._id === router.query.id){
                console.log(singleItem)
            }else{
                await  getSingleProductData(true, router.query.id).then(r =>  handleSetSingleItem(r))
            }

        }else{
            await  getSingleProductData(true, router.query.id).then(r =>  handleSetSingleItem(r))
        }
    },[])
    return(
        <div>
            <div className="product-description-page">
                <div className="product-description-page-l-1">
                    <div className="product-description-page-l-1-left">
                        <div className="product-detail-main-box">
                            <div className="address-p-d">
                                {singleItem && singleItem.address}
                            </div>
                            <div className="icon-tab">
                              <ProductMinorDetails singleItem={singleItem}/>
                            </div>
                            <ProductExtraDetails singleItem={singleItem}/>
                        </div>
                    </div>
                    <div className="product-description-page-l-1-right">
                        <ProductGallery images={singleItem && singleItem.images}/>
                    </div>
                </div>
                <div className="product-description-page-l-2 mb-5">

                    <div className="product-description-page-l-2-left-1"></div>
                    <div className="product-description-page-l-2-left">
                        <hr className="product-description-page-l-2-hr"/>
                        <div className="product-description-page-l-2-left-details-bar">
                            display google map
                        </div>
                        <hr className="product-description-page-l-2-hr"/>
                        <div className="product-description-page-l-2-left-details-bar-2">
                            <div className="sub-heading">Description</div>
                            <div className="desc">
                                {singleItem && singleItem.description}
                            </div>
                        </div>
                        <hr className="product-description-page-l-2-hr"/>
                    </div>

                    <div className="product-description-page-l-2-right">
                        <SideBar/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Details;