import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import styles from '../Styles/Header.module.css'

import sushiImg from '../../Assets/sushi.jpg'

const Header = (props) => {
    return (
        <>
            <header className = {styles.header}>
                <h1>Япона кухня</h1>
                {/* Передаем еще дальше где наша кнопка  */}
                <HeaderCartButton onShowCart = {props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImg} alt="Блюда японской кухни" />
            </div>
        </>
    )
}

export default Header;