import React from 'react';
import classes from './Tag.module.css';

const Tag = props => {
    const {x, y} = props;
    const style = {
        position: 'absolute',
        left: x,
        top: y,
    }
    return (
        <div style={style} className={classes.Tag}>
            <img src='/tag.svg' />
        </div>
    )
}

export default Tag;