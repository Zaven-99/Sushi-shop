import { useRef , useState} from "react";

import styles from "../../Styles/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const [isAmountValid , setIsAmountValid] = useState(true)
  const amountInputRef  = useRef()

  const submitHandler = (e) => {
    e.preventDefault()


    const imputAmount = amountInputRef.current.value

    if(imputAmount.trim().length === 0 || +imputAmount < 1 || +imputAmount > 10){
      setIsAmountValid(false)
      return;
    }

    props.onAddtoCart(+imputAmount)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Количество"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
    </form>
  );
};

export default MealItemForm;
