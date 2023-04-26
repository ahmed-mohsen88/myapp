import axios from "axios";
import Products from "../components/product/Products";
import Styles from "../styles/index.module.scss";
import Head from "next/head";

const index = ({ products }) => {
  return (
    <main className={Styles.app + " container"}>
      <Head>
        <title>The Best Store</title>
      </Head>
      {products.map((product) => {
        return <Products product={product} key={product.id} />;
      })}
    </main>
  );
};

export default index;

export const getStaticProps = async () => {
  const req = await axios.get("https://fakestoreapi.com/products");
  const { data: products } = req;
  return { props: { products } };
};
