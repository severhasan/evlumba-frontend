import React from 'react';

import Tag from '../../../Tag/Tag';
import UserCard from '../../UserCard/UserCard';
import classes from './ImageContainer.module.css';

const ImageContainer = props => {
    const { design } = props;

    return (
        <div className={classes.ImageContainer}>
            <img className={classes.Image} src={design.image} alt='design image' />
            <div className={classes.UserCard}>
                <UserCard username={design.user.username} id={design.user._id} />
            </div>
            {
                design.products.map((t, idx) => <Tag key={'design_product_tag' + idx} x={t.tagX} y={t.tagY} />)
            }
        </div>
    )
}

export default ImageContainer;