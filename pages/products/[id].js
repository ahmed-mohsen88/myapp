import Image from "next/image";
import Styles from "../../styles/singleProduct.module.scss";
import { BsFillCartPlusFill } from "react-icons/bs";

const SingleProduct = (props) => {
  const rating = () => {
    let rat = "";
    for (
      let index = 0;
      index < Math.floor(props?.rating?.rate);
      index++
    ) {
      rat += "⭐";
    }
    return rat;
  };

  return (
    <section>
      <div className={Styles.mainDetails + " container"}>
        <div className={Styles.left}>
          <div className={Styles.title}>
            <p>{props?.title}</p>
          </div>
          <div>
            <span>Category: </span>
            <p>{props?.category}</p>
          </div>
          <div>
            <span>Description: </span>
            <p>{props?.description}</p>
          </div>
          <div>
            <span>Price: </span>
            <p>{props?.price} $</p>
          </div>
          <div className={Styles.addToCart}>
            <button type="button">
              <span>Add To Cart</span>
              <span>
                <BsFillCartPlusFill />
              </span>
            </button>
          </div>
        </div>
        <div className={Styles.right}>
          <Image
            src={props?.image}
            width={400}
            height={400}
            alt={props.id}
          />
          <p className={Styles?.rating}>{rating()}</p>
          <p className={Styles?.like}>
            {props?.rating?.count} People Like
          </p>
        </div>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((product) => {
    return {
      params: { id: `${product.id}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const req = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await req.json();
  return { props: data };
}

export default SingleProduct;
