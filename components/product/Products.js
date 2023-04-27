import Image from "next/image";
import Styles from "../../styles/products.module.scss";
import Link from "next/link";

const Products = ({ product }) => {
  const { id, image, title, price } = product;
  return (
    <div className={Styles.Product_style}>
      <div>
        <Image src={image} width={"200"} height={"200"} alt={id} priority />
      </div>
      <div className={Styles.details}>
        <p>{title}</p>
        <p>Price: {price} $</p>
      </div>
      <div className={Styles.button_div}>
        <Link href={`products/${id}`}>
          <button type="button">More Details</button>
        </Link>
      </div>
    </div>
  );
};
export default Products;
