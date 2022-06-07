export function homeQueryParams(district, city , minPrice, maxPrice, minPurchases,maxPurchases ,minBedRooms , maxBedRooms, minBathRooms, maxBathRooms) {
    let arr = [
        {district : district},
        {city : city} ,
        {price :{$gte: parseInt(minPrice), $lte: parseInt(maxPrice)}},
        {purchase: {$gte: parseInt(minPurchases), $lte: parseInt(maxPurchases)}} ,
        { bedRooms: {$gte: parseInt(minBedRooms), $lte: parseInt(maxBedRooms)}},
        {bathRooms: {$gte: parseInt(minBathRooms), $lte: parseInt(maxBathRooms)}}
    ];

    if (district){
        arr[0].district !== "Any" ?  arr[0].notNull = true : arr[0].notNull = false;
    }
    if(city){
        arr[1].city !== "Any" ?  arr[1].notNull = true : arr[1].notNull = false;
    }
    if(minPrice && maxPrice){
        if(isNaN(arr[2].price.$gte) || isNaN(arr[2].price.$lte) ){
            arr[2].notNull = false;
        }else{
            arr[2].notNull = true;
        }
    }
    if(minPurchases && maxPurchases){
        if(minPurchases && maxPurchases){
            if(isNaN(arr[3].purchase.$gte) || isNaN(arr[3].purchase.$lte)){
                arr[3].notNull = false;
            }else{
                arr[3].notNull = true;
            }
        }
    }
    if(minBedRooms && maxBedRooms){
        if(isNaN(arr[4].bedRooms.$gte) || isNaN(arr[4].bedRooms.$lte)){
            arr[4].notNull = false;
        }else{
            arr[4].notNull = true;
        }
    }
    if(minBathRooms && maxBathRooms){
        if(isNaN(arr[5].bathRooms.$gte) || isNaN(arr[5].bathRooms.$lte)){
            arr[5].notNull = false;
        }else{
            arr[5].notNull = true;
        }
    }

    let queryValues = {};
    let notNullValues = arr.filter((el) => el.notNull === true);

    notNullValues.forEach(element =>{
        delete  element.notNull;
        queryValues = {...queryValues, ...element}
    })
    queryValues =  JSON.stringify(
        queryValues
    );
   return queryValues;
}

export function landQueryParams(district, city , minPrice, maxPrice, minPurchases,maxPurchases ){
    let arr = [
        {district : district},
        {city : city} ,
        {price :{$gte: parseInt(minPrice), $lte: parseInt(maxPrice)}},
        {purchase: {$gte: parseInt(minPurchases), $lte: parseInt(maxPurchases)}} ,
    ];

    if (district){
        arr[0].district !== "Any" ?  arr[0].notNull = true : arr[0].notNull = false;
    }
    if(city){
        arr[1].city !== "Any" ?  arr[1].notNull = true : arr[1].notNull = false;
    }
    if(minPrice && maxPrice){
        if(isNaN(arr[2].price.$gte) || isNaN(arr[2].price.$lte) ){
            arr[2].notNull = false;
        }else{
            arr[2].notNull = true;
        }
    }
    if(minPurchases && maxPurchases){
        if(minPurchases && maxPurchases){
            if(isNaN(arr[3].purchase.$gte) || isNaN(arr[3].purchase.$lte)){
                arr[3].notNull = false;
            }else{
                arr[3].notNull = true;
            }
        }
    }

    let queryValues = {};
    let notNullValues = arr.filter((el) => el.notNull === true);

    notNullValues.forEach(element =>{
        delete  element.notNull;
        queryValues = {...queryValues, ...element}
    })
    console.log(notNullValues)
    queryValues =  JSON.stringify(
        queryValues
    );
    return queryValues;
}