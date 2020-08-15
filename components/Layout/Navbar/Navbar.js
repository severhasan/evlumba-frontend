import React from 'react';
import classes from './Navbar.module.css';
// import Logo from '../../../public/evlumbaalogo.png';

const Navbar = () => {

    return (
        <div className={classes.Navbar}>
            <div className='container'>
                <div className={classes.Logo}>
                    <img src='/evlumbaalogo.png' />
                </div>
                <div className={classes.UserMenu}>
                    <span>Giriş Yap</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;