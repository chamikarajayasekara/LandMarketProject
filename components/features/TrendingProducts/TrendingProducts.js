import React, {useEffect, useState} from 'react';
import Section, {SectionColumn, SectionRow} from "../../../layouts/container/sections/sections";
import {productsLIST} from "../../../mock/products";
import ProductCard from "../Shop/ProductCard/ProductCard";
import {getProductCategoriesFromApi, getProductsFromAPI} from "../../../apis/product.apis.helper";
import Loader from "../../common/Loader/loader";
import {CartState} from "../../../context/context";


const TrendingProducts = () => {

    const [product,setProduct] = useState();
    const [categories,setCategories] = useState();
    const { addProducts , addProductCategories} = CartState();


    useEffect(async () =>{
        //set products
        await getProductsFromAPI().then(r => setProduct(r));
        await getProductCategoriesFromApi().then(r => setCategories(r));
    },[])

    useEffect(()=>{
        if (product){
            addProducts(product);
        }
    },[product])
    useEffect(()=>{
       if (categories){
           addProductCategories(categories)
       }
    },[categories])

    return (
        <Section className="mb-5 mt-5">
            <SectionColumn className="w-full">
                <div className="flex flex-row justify-center mb-3 top-products">
                    Top Products
                </div>
            </SectionColumn>
            <SectionColumn className="w-1/12 "></SectionColumn>
            <SectionColumn className="w-10/12">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
                    {
                        product === null || product === undefined  ?
                            <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Loader/>
                            </div>

                            :
                            product?.map(product =>
                                <ProductCard product={product}/>
                            )
                    }
                </div>
            </SectionColumn>
            <SectionColumn className="w-1/12 "></SectionColumn>
        </Section>
    );
};

export default TrendingProducts;

