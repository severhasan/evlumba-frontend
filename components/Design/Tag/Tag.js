import React from 'react';
import classes from './Tag.module.css';

const Tag = props => {
    const {x, y} = props;
    const style = {
        position: 'absolute',
        left: `${x * 100}%`,
        top: `${y * 100}%`,
    }
    return (
        <div style={style} className={classes.Tag}>
            <img src='/image/tag.svg' />
        </div>
    )
}

export default Tag;