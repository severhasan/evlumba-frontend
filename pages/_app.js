import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider} from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
// import { getDataFromTree } from '@apollo/react-ssr';
import Layout from '../containers/Layout/Layout';
import App from 'next/app';
import '../public/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GRAPHQL_URL } from '../helper/constants';

const link = createHttpLink({
    uri: GRAPHQL_URL
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

class MyApp extends App {
    
    render() {
        const {Component, pageProps} = this.props;
        return (
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        )
    }
}
export default MyApp;