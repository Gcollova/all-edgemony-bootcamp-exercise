import React from "react";
import VatCalculator from './Components/AddVat';
import { data } from "./data";
import styles from './App.module.scss';



function App() {
  let [stateVat, setState] = React.useState(0)
  return (
    <>
      <div className={styles.main}>
      <select name="country" id="country" onChange={ (e)=> setState(parseInt(e.target.value)) }>
            
        {data.map((nations)=> <option key={nations.country} value={nations.standard_rate}>{nations.country}</option>
                
          )
        }     
            
                
      </select>
      
      <VatCalculator vat={stateVat} />
      
      
    </div>
      
    </>
    
  );
}

export default App;
