import Products from "../components/product/Products";
import Styles from "../styles/index.module.scss";
import Head from "next/head";

const index = (props) => {
  return (
    <main className={Styles.app + " container"}>
      <Head>
        <title>The Best Store</title>
      </Head>
      {props.products.map((product) => {
        return <Products product={product} key={product.id} />;
      })}
    </main>
  );
};

export default index;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const data = await req.json();
  return { props: { products: data } };
}
