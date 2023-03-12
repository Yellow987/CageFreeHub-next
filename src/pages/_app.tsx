import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalNavBar from './../components/GlobalNavBar';
import { AuthProvider } from '../firebase/auth/AuthContext';
import { useEffect } from 'react';
import { setupFirebaseClientSideMonitoring } from '@/firebase/firebaseSetup';
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setupFirebaseClientSideMonitoring();
  }, []);
  
  return (
    <>
      <Head>
        <title>Cage Free Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Worldwide trusted directory of cage-free egg sellers"
        />
      </Head>
      <AuthProvider> 
        <GlobalNavBar />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default appWithTranslation(App, nextI18NextConfig)
