import React from 'react';

import CommentButton from '../../../components/Buttons/Comment/Comment';
import HeartButton from '../../../components/Buttons/Heart/Heart';
import CollectionButton from '../../../components/Buttons/Collection/Collection';
import classes from './MiniDesignCard.module.css';

const MiniDesignCard = props => {
    const {image, title, likes, comments, likedByUser, inCollections} = props;

    return (
        <div className={classes.MiniDesignCard}>
            <img src={image} className={classes.Image} alt='mini design image' />
            <h6 className={classes.Title}>{title}</h6>

            <div className={classes.Buttons}>
                <span>

                </span>
                <HeartButton likedByUser={likedByUser} likes={likes} size={15} />
                <span className='ml-2'>
                    <CommentButton count={comments} size={15}/>
                </span>
                <div className={classes.Collection}>
                    <CollectionButton inCollections={inCollections} size={18} />
                </div>
            </div>
        </div>
    )
}

export default MiniDesignCard;