import React from 'react';

import HeartAndCollection from '../../../../Buttons/HeartAndCollection';
import classes from './DesignDetail.module.css';

const DesignDetail = props => {
    const { design } = props;
    return (
        <div className={classes.DesignDetail}>
            <div className={classes.Icons}>
                <HeartAndCollection likedByUser={design.likedByUser} likes={design.likes} inCollections={design.inCollections} />
            </div>

            <h6 className={classes.Title}> { design.title } </h6>
            <p className={classes.Subtitle}> { design.subtitle } </p>

            <p className={classes.Description}> { design.description } </p>
        </div>
    )
}


export default DesignDetail;