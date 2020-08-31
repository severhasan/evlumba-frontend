import React from 'react';

import Heart from '../../Buttons/Heart/Heart';
import classes from './CommentCard.module.css';

const CommentCard = props => {
    const { user, content, id, likedByUser, likes } = props;

    return (
        <div className={classes.CommentCard}>
            <div className={classes.Likes}>
                <Heart likedByUser={likedByUser} likes={likes} />
            </div>
            <h6 className={classes.User}>{user.username}</h6>
            <div className={classes.Content}>
                {content}
            </div>
        </div>
    )
}

export default CommentCard;