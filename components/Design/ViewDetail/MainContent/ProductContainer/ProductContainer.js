import React from 'react';

import ProductCard from '../../../ProductCard/ProductCard';
import classes from './ProductContainer.module.css';

const ProductContainer = props => {
    const { products } = props;

    return (
        <div className={classes.ProductContainer}>
            {
                products.length === 0 ?
                <p className={classes.NoProducts}>Bu stilde etiketlenmiş herhangi bir ürün bulunmuyor</p>
                :
                products.map((p, idx) => (
                    <div key={'design_product_card' + idx} className={classes.ProductCardContainer}>
                        <ProductCard product={p.product} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductContainer;