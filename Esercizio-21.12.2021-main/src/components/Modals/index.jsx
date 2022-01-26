import styles from './Modals.module.scss'

const Modals =(props)=> {
    
    console.log(props.status)
    
    return <div className={props.status==="create" ? styles.create : props.status==="delete" ? styles.delete : null}>{props.message}</div>
        
        
    
}

export default Modals;