import React, {useEffect} from 'react';
import ImageGallery from 'react-image-gallery';

const images = [];
function ProductGallery(props) {
    useEffect(()=>{
        let imageObject;
        props.images?.forEach((element) =>{
            imageObject = {original:element.url, thumbnail:element.url}
            images.push(imageObject);
        })
    },[])
    return (
        <ImageGallery items={images}/>
    );
}

export default ProductGallery;