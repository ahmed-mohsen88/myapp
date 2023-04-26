import Link from "next/link";
import Styles from "../../styles/navbar.module.scss";
import { BsFillCartFill } from "react-icons/bs";


const NavBar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container + " container"}>
        <div className={Styles.logo}>
          <p>ONLINE SHOP</p>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cart">
              <span>Cart</span>
              <span className={Styles.icon}>
                <BsFillCartFill />
                <span className={Styles.cartCount}>1</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
