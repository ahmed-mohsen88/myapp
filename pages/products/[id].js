import { useRecoilValue } from "recoil";
import { productState } from "../../components/state/State";
import Image from "next/image";
import Styles from "../../styles/singleProduct.module.scss";
import { BsFillCartPlusFill } from "react-icons/bs";

const SingleProduct = () => {
  const getProductState = useRecoilValue(productState);
  const rating = () => {
    let rat = "";
    for (
      let index = 0;
      index < Math.floor(getProductState?.rating?.rate);
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
            <p>{getProductState?.title}</p>
          </div>
          <div>
            <span>Category: </span>
            <p>{getProductState?.category}</p>
          </div>
          <div>
            <span>Description: </span>
            <p>{getProductState?.description}</p>
          </div>
          <div>
            <span>Price: </span>
            <p>{getProductState?.price} $</p>
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
            src={getProductState?.image}
            width={400}
            height={400}
            alt={getProductState.id}
          />
          <p className={Styles?.rating}>{rating()}</p>
          <p className={Styles?.like}>
            {getProductState?.rating?.count} People Like
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
