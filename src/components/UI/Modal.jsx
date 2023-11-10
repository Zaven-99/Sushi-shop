import ReactDOM  from 'react-dom'

import styles from '../Styles/Modal.module.css'

const Backdrop = (props) => {
    //Вешаем на BackDrop клик
    return  <div onClick = {props.onHideCart} className={styles.backdrop}></div>
}

const ModalWindow = (props) => {
    return  <div className={styles.modal}>
        <div className= {styles.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')


const Modal = (props) => {
    return (
        <>
        {/* Также нужно вешать клик сюда  */}
            {ReactDOM.createPortal(<Backdrop onHideCart = {props.onHideCart}/> , portalElement)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow> , portalElement)}
        </>
    )
}

export default Modal;