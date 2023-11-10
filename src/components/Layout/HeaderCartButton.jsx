import CartIcon from "../Cart/CartIcon";
import styles from "../Styles/HeaderCartButton.module.css";

import CartContext from "../../Store/Cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${isBtnAnimated ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsBtnAnimated(true);

    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <>
      {/* вешаем обработчик на кнопку  */}
      <button className={buttonClasses} onClick={props.onShowCart}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>{cartItemsNumber}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
