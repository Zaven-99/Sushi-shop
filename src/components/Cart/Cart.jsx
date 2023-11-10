import styles from "../Styles/Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  //получаем сумму
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  //если существует больше одного элемента получаем в hasItem
  const hasItems = cartContext.items.length > 0;

  const removeCartItem = (id) => {
    cartContext.removeItem(id)
  }
  const addCartItem = (item) => {
    cartContext.addItem({...item, amount:1})
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd = {addCartItem.bind(null , item)}
          onRemove = {removeCartItem.bind(null , item.id)}
        />
      ))}
    </ul>
  );

  return (
    // чтобы при клике на backDrop закрыть модальное окно также нужно этому блоку передать данную функцию
    // поэтому функцию передаем в компонент Modal где находится наш backDrop
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        {/* Вешаем на кнопку обработчик события  */}
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
