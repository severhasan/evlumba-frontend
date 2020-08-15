import React, { useState } from 'react';
import classes from './Product.module.css';

const Product = props => {
    const { product, selected } = props;

    const selectProduct = () => {
        props.selectProduct(product._id);
    }

    return (
        <div className={classes.Product} onClick={selectProduct}>
            <div className={selected === product._id ? classes.Selected + " card" : " card"}>
                <img className={classes.Image + " card-img-top"} src={product.src} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;