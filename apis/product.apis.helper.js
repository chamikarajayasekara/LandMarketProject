import axios from "axios";




export async function getDistrictsFromAPI(){
    try {
        return (await axios.get('api/districts')).data.data;
    }catch (e) {
        console.log(e)
        throw Error("Districts get failed")
    }
}

export async function getCitiesFromAPI() {
    try {
        return (await axios.get('api/cities')).data.data;
    }catch (e) {
        console.log(e)
        throw Error("Cities get failed")
    }
}

export async function getLandsFromApi(values) {

    try {
        return (await axios.get(`api/lands?values=${values}`)).data.data;
        // return (await axios.get(`api/testp`)).data.data;
    }catch (e) {
        console.log(e)
        throw Error("Lands get failed")
    }
}

export async function getHousesFromApi(values) {
    try {
        return (await axios.get(`api/homes?values=${values}`)).data.data;
    }catch (e) {
        console.log(e)
        throw Error("Houses get failed")
    }
}
export async function getSingleProductData(isProduct, id){
    console.log(isProduct, id)
    // try{
    //     if(isProduct === true){
    //         return (await axios.get(`api/shopid?product=${isProduct}&id=${id}`)).data.data;
    //     }else{
    //         return (await axios.get(`api/shopid?product=${isProduct}&id=${id}`)).data.data;
    //     }
    // }catch (e) {
    //     throw Error("Products get failed")
    // }
}














export async function getUniversalItems(selectedItem) {
    try{
        if (selectedItem){
            return (await axios.get(`api/items?model=${selectedItem}`)).data.data;
        }else{
            return (await axios.get('api/items')).data.data;
        }
    }catch (e) {
        throw Error("Items get failed")
    }
}


export async function getUniversalCategories(){
    try{
        return (await axios.get('api/universal-categories')).data.data;
    }catch (e) {
        throw Error("Items categories get failed")
    }
}

export async function getModalsFromSelectedVehicleApi(selectedVehicle) {
    try {
        return (await axios.get(`api/modal?vehicle=${selectedVehicle}`)).data.data;
    }catch (e) {
        console.log(e)
        throw Error("Vehicle modals get failed")
    }
}

export async function getAccessoriesFromSelectedVehicleAndModalApi(selectedVehicle, selectedVehicleModal) {
    try {
        return (await axios.get(`api/accessories?vehicle=${selectedVehicle}&model=${selectedVehicleModal}`)).data.data;
    }catch (e) {
        console.log(e)
        throw Error("Vehicle accessories get failed")
    }
}

export async function getProductsApi(selectedVehicle, selectedVehicleModal, selectedAccessory) {
    selectedVehicleModal === 'Not Selected'? selectedVehicleModal = undefined : null ;
    selectedAccessory === 'Not Selected'? selectedAccessory = undefined : null;

    try {
        if (!selectedVehicle && !selectedVehicleModal && !selectedAccessory){
            return (await axios.get(`api/product`)).data.data;
        }
    }catch (e) {
        console.log(e)
        throw Error("Product categories get failed")
    }
}

export async function getProductsWithVehicle(selectedVehicle, selectedVehicleModal, selectedAccessory){
    selectedVehicleModal === 'Not Selected'? selectedVehicleModal = undefined : null ;
    selectedAccessory === 'Not Selected'? selectedAccessory = undefined : null;
    try {
        if (selectedVehicle && !selectedVehicleModal && !selectedAccessory){

            return (await axios.get(`api/product?vehicle=${selectedVehicle}`)).data.data;
        }
    }catch (e) {
        console.log(e)
        throw Error("Product categories get failed")
    }
}

export async function getProductsWithVehicleModal(selectedVehicle, selectedVehicleModal, selectedAccessory){
    selectedVehicleModal === 'Not Selected'? selectedVehicleModal = undefined : null ;
    selectedAccessory === 'Not Selected'? selectedAccessory = undefined : null;

    try {
        if(!selectedVehicleModal){
            if(selectedVehicle){
                return (await axios.get(`api/product?vehicle=${selectedVehicle}`)).data.data;
            }
        }else{
            return (await axios.get(`api/product?vehicle=${selectedVehicle}&model=${selectedVehicleModal}`)).data.data;
        }
    }catch (e) {
        console.log(e)
        throw Error("Product categories get failed")
    }
}

export async function getProductsWithVehicleModalAccessories(selectedVehicle, selectedVehicleModal, selectedAccessory){
    selectedVehicleModal === 'Not Selected'? selectedVehicleModal = undefined : null ;
    selectedAccessory === 'Not Selected'? selectedAccessory = undefined : null;

    try {
        if(!selectedAccessory){
            if (selectedVehicle && selectedVehicleModal){
                return (await axios.get(`api/product?vehicle=${selectedVehicle}&model=${selectedVehicleModal}`)).data.data;
            }
        }else{
            if (selectedVehicle && selectedVehicleModal && selectedAccessory){
                return (await axios.get(`api/product?vehicle=${selectedVehicle}&model=${selectedVehicleModal}&category=${selectedAccessory}`)).data.data;
            }
        }
    }catch (e) {
        console.log(e)
        throw Error("Product categories get failed")
    }
}