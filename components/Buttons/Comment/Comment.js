import React from 'react';
import CommentIcon from '@material-ui/icons/Comment';
import classes from './Comment.module.css';

const Comment = props => {
    const { count, size } = props;
    return (
        <div>
            <span style={{marginRight: '4px', verticalAlign: 'middle'}}>{count}</span>
            <span className={classes.Icon}>
                <CommentIcon style={{fontSize: size ? size + "px" : "1rem"}} />
            </span>
        </div>
    )
}

export default Comment;