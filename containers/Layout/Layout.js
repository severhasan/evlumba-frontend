import React from 'react';
import Head from 'next/head';

import Navbar from '../../components/Layout/Navbar/Navbar';
import Footer from '../../components/Layout/Footer/Footer';
import classes from './Layout.module.css';

const Layout = props => {

    return (
        <div className='Body'>
            <Head>
                <title>Evlumba</title>
            </Head>
            <Navbar />

            <div>
                <main className={classes.Main + ' container'}>
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;