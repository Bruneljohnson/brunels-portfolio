import { Layout } from "../layout/Layout";
import Theme from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}

export default App;
