import React from "react";
import './style.css'

const ProductSpecs = (props)=>(
    <div className="product-specs">
    <div className="title-price">
        <h2>{props.title}</h2>
        <h2>{props.price}</h2>

    </div>
    <div className="specs">        
        <p>{props.content}</p>
    </div>
    </div>
)

export default ProductSpecs