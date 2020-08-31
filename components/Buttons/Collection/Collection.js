import React from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import classes from './Collection.module.css';


const Collection = props => {
    const { inCollections, size } = props;
    return (
        <div className={classes.Collection}>
            {
                inCollections
                ?
                <BookmarkIcon style={{color: "green", fontSize: size ? size + 'px' : '1rem'}} />
                :
                <BookmarkBorderIcon style={{color: "green", fontSize: size ? size + 'px' : '1rem'}} />
            }
        </div>
    )
}

export default Collection;