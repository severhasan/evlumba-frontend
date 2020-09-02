import React from 'react';

import classes from './Top.module.css';

const Design = props => {
    const { header, content, extraElement, failure } = props;


    return (
        <div className={classes.Container}>
            <div className={classes.Popup}>
                <div className={classes.Header}>
                    <h6>{header}</h6>
                </div>
                <div className={[classes.Body, failure ? classes.Fail : ''].join(' ')}>
                    {content}
                </div>
            </div>
            <div className={classes.Shadow}></div>
        </div>
    )
}

export default Design;