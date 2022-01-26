import React from "react";
import './style.css'

const ProductImage= (props)=>(
    <>
        <img srcSet={`${props.url}`} alt="product-img"/>
    </>
)

export default ProductImage