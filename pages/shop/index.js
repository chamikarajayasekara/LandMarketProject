import Section, {SectionColumn} from "../../layouts/container/sections/sections";
import React, {useEffect, useState} from "react";
import Link from 'next/link'
import ProductCard from "../../components/features/Shop/ProductCard/ProductCard";
import Loader from "../../components/common/Loader/loader";
import {CartState} from "../../context/context";
import {
    getAccessoriesFromSelectedVehicleAndModalApi,
    getModalsFromSelectedVehicleApi,
    getProductCategoriesFromApi, getProductsApi,
    getProductsFromAPI, getProductsWithVehicle, getProductsWithVehicleModal, getProductsWithVehicleModalAccessories,
    getVehiclesFromApi
} from "../../apis/product.apis.helper";
import VehicleModals from "../../components/features/Shop/VehicleModals/VehicleModals";
import VehicleAccessories from "../../components/features/Shop/VehicleAccesories/VehicleAccessories";
import AccessorySelection from "../../components/features/Shop/SelectedCategories/AccessorySelection";
import VehicleSelection from "../../components/features/Shop/SelectedCategories/DistrictSelection";
import CitySelection from "../../components/features/Shop/SelectedCategories/CitySelection";
import {useRouter} from "next/router";
import {RouteContextState} from "../../context/RouteContext";
import ProductListHeader from "../../components/common/ProductListHeader/ProductListHeader";

function ShopHome(props) {
    const {activeTab, clearFilterData, selectedDistrict, selectedCities } = CartState();

    const {lands, houses} = CartState();
    const [items, setItems] = useState(null);
    useEffect(()=>{
        if (activeTab === "lands"){
            setItems(lands);
        }else{
            setItems(houses);
        }
    },[])
    return (
        <div className="product-page">
            <Section className=" mb-5  shop-container ">
                <SectionColumn className=" product-col">
                    <div className="product-grid mt-5">
                        <ProductListHeader items={items && items.length}/>
                        <hr className="product-header-hr"/>
                        {

                            items === null || items === undefined ?
                                <div>
                                    <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Loader/>
                                    </div>
                                </div>
                            :
                                items && items.map((product) =>(
                                <div key={product._id}>
                                        <ProductCard product={product} url={"shop"} />
                                </div>
                            ))
                        }
                    </div>

                </SectionColumn>
            </Section>
        </div>
    )
}

export default ShopHome

