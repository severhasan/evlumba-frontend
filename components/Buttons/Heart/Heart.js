import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from './Heart.module.css';

const Heart = props => {
    const { likedByUser, likes, size } = props;
    return (
        <div>
            <span className={classes.Likes}>{likes}</span>
            <span className={classes.Heart}>
                {
                    likedByUser
                    ?
                    <FavoriteIcon className='Icon' style={{color: "crimson", fontSize: size ? size + "px" : "1rem"}} />
                    :
                    <FavoriteBorderIcon className='Icon' style={{color: "crimson", fontSize: size ? size + "px" : "1rem"}} />
                }
            </span>
        </div>
    )
}

export default Heart;