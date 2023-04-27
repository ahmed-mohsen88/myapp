import "../styles/globals.scss";
import LayOut from "../components/layout/LayOut";

export default function App({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}
