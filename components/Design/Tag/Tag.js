import React from 'react';
import classes from './Tag.module.css';

const Tag = props => {
    const {x, y} = props;
    
    // use tag size to align click position & center of the tag;
    const tagSizeX = 25;
    const tagSizeY = 20; 
    const style = {
        position: 'absolute',
        // left: `${x * 100}%`,
        // top: `${y * 100}%`,
        left: `calc(${x * 100}% - ${tagSizeX}px)`,
        top: `calc(${y * 100}% - ${tagSizeY}px)`,
    }
    return (
        <div style={style} className={classes.Tag}>
            <img src='/image/tag.svg' />
        </div>
    )
}

export default Tag;