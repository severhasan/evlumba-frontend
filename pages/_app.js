import React from 'react';
import Layout from '../containers/Layout/Layout';
// import './main.css';
import App from 'next/app';

class MyApp extends App {


    render() {
        const {Component, pageProps} = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

  
export default MyApp;