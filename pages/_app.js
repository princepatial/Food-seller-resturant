import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import {SSRProvider} from '@react-aria/ssr'
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Layout>
      <Component {...pageProps}  />
    </Layout>
    </SSRProvider>
  );
}

export default MyApp;
