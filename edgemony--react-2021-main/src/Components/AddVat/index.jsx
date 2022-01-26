import styles from './vatCalculator.module.scss'
import React from "react";

const VatCalculator = (props) =>{
    let [Vat, setState] = React.useState(0);
    return (
        <div className={styles.calculator}>
            <div className={styles.inputDiv}>
            <label htmlFor="quantity">Price (noVat)</label>
            <input name="quantity" id="quantity" type="number"  onChange={(e) => {
                if(isNaN(parseInt(e.nativeEvent.path[0].value))){ e.nativeEvent.path[0].value = 0}
                setState(((parseInt(e.nativeEvent.path[0].value) * parseInt(props.vat))/100)+parseInt(e.nativeEvent.path[0].value))                
            }}
            />
            </div>
            <div className={styles.total}>
                <h3>Total (with Vat) :</h3>
               <p>{Vat}</p> 
            </div>
            

        </div>
    )
}

export default VatCalculator