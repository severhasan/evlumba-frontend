import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import classes from './Heart.module.css';

const Heart = props => {
    const { likedByUser } = props;
    return (
        <div className={classes.RoundHeart}>
            {
                likedByUser
                ?
                <FavoriteIcon style={{color: "crimson"}} />
                :
                <FavoriteBorderIcon style={{color: "crimson"}} />
            }
        </div>
    )
}

export default Heart;