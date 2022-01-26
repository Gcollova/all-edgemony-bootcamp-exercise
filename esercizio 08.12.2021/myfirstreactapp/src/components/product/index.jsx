import './style.css'
import React from "react";
import Button from "../button";
import ProductSpecs from '../TextBlock';
import ColorPicker from '../color';
import ProductImage from '../img';


const Product = (Products)=>(
    <div className='product'>
    <ProductImage url={`${Products.url}`}/>
    <ProductSpecs title={`${Products.title}`} price={`${Products.price}`} content={`${Products.spec}`}/>
    <ColorPicker/>
    <Button inner="Aggiungi al Carrello" />

    </div>
)

export default Product