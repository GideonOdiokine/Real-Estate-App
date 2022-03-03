import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Head from 'next/head';
import Nprogress from 'nprogress';

import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <>
  <Head>

  </Head>
  <ChakraProvider>
    <Layout title="Real Estate">
      <Component {...pageProps} />    
    </Layout>
  </ChakraProvider>
    </>
  )
}

export default MyApp
