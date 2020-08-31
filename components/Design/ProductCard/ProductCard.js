import React from 'react';

import RoundHeartButton from '../../Buttons/Heart/RoundHeart';
import Collection from '../../Buttons/Collection/Collection';
import classes from './ProductCard.module.css';

const ProductCard = props => {
    const { product } = props;

    return (
        <div className={classes.ProductCard}>
            <div className={classes.Buttons}>
                <RoundHeartButton likedByUser={product.likedByUser} />
                <span className='mt-1'>
                    <Collection likedByUser={product.inCollections} />
                </span>
            </div>
            <img className={classes.Image} src={product.image} alt='Design product image' />

            <div className={classes.Detail}>
                <p className={classes.Title}>{product.title}</p>
                <p className={classes.Price}>{product.salePrice}</p>
            </div>
        </div>
    )
}

export default ProductCard;