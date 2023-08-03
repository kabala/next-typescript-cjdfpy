import '../styles/globals.css';
import type { AppProps } from 'next/app';

import mockServer from '../mocks/server';

mockServer();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
