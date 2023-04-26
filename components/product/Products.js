import Image from "next/image";
import Styles from "../../styles/products.module.scss";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { productState, getProductState } from "../state/State";

const Products = ({ product }) => {
  const [singleProduct, setsingleProduct] = useRecoilState(productState);
  const getProductState = useRecoilValue(productState);

  const handelClick = () => {
    setsingleProduct(product);
  };

  const { id, image, title, price } = product;
  return (
    <div className={Styles.Product_style}>
      <div>
        <Image src={image} width={"200"} height={"200"} alt={id} />
      </div>
      <div className={Styles.details}>
        <p>{title}</p>
        <p>Price: {price} $</p>
      </div>
      <div className={Styles.button_div}>
        <Link href={`products/${id}`}>
          <button type="button" onClick={handelClick}>
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Products;
