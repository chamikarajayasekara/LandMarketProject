import React, {useEffect} from 'react';
import ProductCategories from "../ProductCategories/ProductCategories";
import BasicSelect from "../../../common/tset";
import SimpleSelect from "../../../common/tset";

const DistrictSelection = ({setItem,item, selectedItem, title}) => {

    return (<ProductCategories  setSelectedItem={setItem} items={item} selectedItem={selectedItem} title={title}/>)


};

export default DistrictSelection;