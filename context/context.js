import { createContext, useContext, useEffect, useState } from "react";
import citiesData from '../localJson/cities.json'
import {useRouter} from "next/router";

const Cart = createContext();

const Context = ({children}) => {
    const router = useRouter()

    const [districts, setDistricts] = useState(null);
    const [cities, setCities] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const [lands, setLands] = useState(null);
    const [houses, setHouses] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedCities, setSelectedCities] = useState(null);
    const [filterPurchases, setFilterPurchases] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [minPurchases, setMinPurchases] = useState(null);
    const [maxPurchases, setMaxPurchases] = useState(null);
    const [minBedRooms, setMinBedRooms] = useState(null);
    const [maxBedRooms, setMaxBedRooms] = useState(null);
    const [minBathRooms, setMinBathRooms] = useState(null);
    const [maxBathRooms, setMaxBathRooms] = useState(null);
    const [filterPrice, setFilterPrice] = useState(null);
    const [filterBedRooms, setFilterBedRooms] = useState(null);
    const [filterBathRooms, setFilterBathRooms] = useState(null);
    const [activeTab,setActiveTab]= useState(null);

    const [singleItem ,  setSingleItem] = useState(null);
    // const {setAlert} = useAlerts();

    useEffect(() =>{
        let districts = Object.keys(citiesData);
        setDistricts(districts);

    },[])

    const getCitiesByDistricts = (data) =>{
        if(data !== "Any"){
            let filteredCitiesData = citiesData[data].cities;
            setFilteredCities(filteredCitiesData);
        }
    }

    const handleSetLands = (data) => {
        // data = data.sort((a,b) => a.name.localeCompare(b.name))
        setLands(data);
    }

    const handleSetHouses = (data) => {
        // data = data.sort((a,b) => a.name.localeCompare(b.name))
        setHouses(data);
    }

    const handleSetSelectedDistrict = (data) =>{
        setSelectedDistrict(data);
        setSelectedCities(null);
    }

   const handleSetSelectedCity = (data) =>{
       setSelectedCities(data);
    }

    const clearFilterData = () => {
        setFilterBedRooms(null);
        setFilterBathRooms(null);
        setFilterPurchases(null);
        setFilterPrice(null);
        setMinPrice(null);
        setMaxPrice(null);
        setMinPurchases(null);
        setMaxPurchases(null);
        setMinBedRooms(null);
        setMaxBedRooms(null);
        setMinBathRooms(null);
        setMaxBathRooms(null);
    }

    const handleSetFilteredPrices = (data) => {
        setFilterPrice(data)
    }
    const handleSetFilteredPurchase = (data) => {
        setFilterPurchases(data)
    }
    const handleSetFilteredBathrooms = (data) => {
        setFilterBathRooms(data)
    }
    const handleSetFilteredBedRooms = (data) => {
        setFilterBedRooms(data)
    }

    function handleMinPurchase(data) {
        setMinPurchases(data)
    }
    function handleMaxPurchase(data) {
        setMaxPurchases(data)
    }
    function handleMinBedRooms(data) {
        setMinBedRooms(data)
    }
    function handleMaxBedRooms(data) {
        setMaxBedRooms(data)
    }
    function handleMinBathRooms(data) {
        setMinBathRooms(data)
    }
    function handleMaxBathRooms(data) {
        setMaxBathRooms(data)
    }

    function handleSetSingleItem(data) {
        setSingleItem(data);
        let productData = {product: data, time: new Date()}
        localStorage.setItem('product',JSON.stringify(productData));
    }
    const handleSelectedValues = () => {
        setSelectedDistrict(null);
        setSelectedCities(null);
        setFilterBedRooms(null);
        setFilterBathRooms(null);
        setFilterPurchases(null);
        setFilterPrice(null);
        setMinPurchases(null);
        setMaxPurchases(null)
    }

    return (
        <Cart.Provider value={{
            districts,
            cities,
            lands,
            houses,
            filteredCities,
            selectedDistrict,
            setSelectedDistrict,
            selectedCities,
            setSelectedCities,
            handleSelectedValues,
            handleSetLands,
            handleSetHouses,
            getCitiesByDistricts,
            filterPurchases,
            filterPrice,
            filterBedRooms,
            filterBathRooms,
            setFilterPurchases,
            handleSetFilteredPrices,
            handleSetFilteredPurchase,
            handleSetFilteredBathrooms,
            handleSetFilteredBedRooms,
            handleSetSelectedDistrict,
            handleSetSelectedCity,
            clearFilterData,
            minPrice,
            maxPrice,
            setMinPrice,
            setMaxPrice,
            activeTab,
            setActiveTab,
            minPurchases,
            maxPurchases,
            handleMinPurchase,
            handleMaxPurchase,
            handleMinBedRooms,
            handleMaxBedRooms,
            handleMinBathRooms,
            handleMaxBathRooms,
            minBedRooms,
            maxBedRooms,
            minBathRooms,
            maxBathRooms,
            handleSetSingleItem,
            singleItem
        }}>
            {children}
        </Cart.Provider>
    );
};
export const CartState = () => {
    return useContext(Cart);
};

export default Context;