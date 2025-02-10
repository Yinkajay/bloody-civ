import Layout from '@/components/Layout'
import LoaderScreen from '@/components/Loaders/LoaderScreen';
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [initialLoad, setInitialLoad] = useState(true)


  // useEffect(() => {
  //   const minimumLoadTime = 3000; // Minimum time to show loader in milliseconds (e.g., 2 seconds)

  //   const timeout = setTimeout(() => {
  //     setInitialLoad(false); // Hide the loader after the timeout
  //   }, minimumLoadTime);

  //   return () => clearTimeout(timeout); // Cleanup timeout if component unmounts
  // }, []);

  // if (initialLoad) {
  //   return <LoaderScreen />
  // }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
