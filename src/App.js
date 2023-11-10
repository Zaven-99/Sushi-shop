import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
    //Вводим состояние для модального окна. Изначально она не видна.(false)
    const [cartIsVisible , setCartIsVisible] =  useState(false)   

    //функция где при клике будем показывать модальное окно 
    const showCart = () => {
      setCartIsVisible(true)
    }
//функция где при клике будем скрывать модальное окно 
    const hideCart = () => {
      setCartIsVisible(false)
    }

  return (
    <CartContextProvider>
    {/* Если cartIsVisible равно true, то результатом этого выражения будет <Cart />.
        Если cartIsVisible равно false, то результатом выражения будет false (или null), и компонент Cart не будет отрисован. 
        Передаем функции через пропс вниз где наши кнопки (Кнопка - Корзина при клике на нее будем показывать) и (Кнопка - Закрыть при клике на нее уберем окно)*/}
      {cartIsVisible && <Cart onHideCart = {hideCart}/>}
      <Header onShowCart = {showCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
