import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {

    return (
        <div className={classes.Footer}>
            <div className='container'>
                <div className={classes.Label}>
                    Hakkımızda
                </div>
                <div className={classes.Label}>
                    Kariyer
                </div>
            </div>
        </div>
    );
}

export default Footer;