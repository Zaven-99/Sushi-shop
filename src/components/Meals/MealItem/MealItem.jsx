import styles from '../../Styles/MealItem.module.css'
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../Store/Cart-context';

const MealItem = (props) => {

    const cartContext = useContext(CartContext)
    const formatedPrice = `$${props.price.toFixed(2)}`


    const addToCardhandler = (amount) => {
        cartContext.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }

    return (
         <li className={styles.meal}>
            <div className= {styles.wrapper}>
                <div><h3>{props.name}</h3></div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddtoCart = {addToCardhandler} id = {props.id}/>
            </div>
         </li>
    )
}

export default MealItem;