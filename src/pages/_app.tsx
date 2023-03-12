import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalNavBar from './../components/GlobalNavBar';
import { AuthProvider } from '../firebase/auth/AuthContext';
import { useEffect } from 'react';
import { setupFirebaseClientSideMonitoring } from '@/firebase/firebaseSetup';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setupFirebaseClientSideMonitoring();
  }, []);
  
  return (
    <>
      <AuthProvider> 
        <GlobalNavBar />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
