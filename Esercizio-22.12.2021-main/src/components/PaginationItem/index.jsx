
import styles from "./PaginationItem.module.scss"

const PaginationItem=(props)=>{
    

    
    return(
        
            
                <button className={props.current===props.state ? styles.active : null}  onClick={()=>props.setCurrent(props.current)} >{props.current}</button>            
              
       
        
    )
}

export default PaginationItem