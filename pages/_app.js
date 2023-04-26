import { RecoilRoot } from "recoil";
import "../styles/globals.scss";
import LayOut from "../components/layout/LayOut";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </RecoilRoot>
  );
}
