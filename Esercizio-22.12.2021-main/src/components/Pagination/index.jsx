import PaginationItem from "../PaginationItem/index"
import { useEffect,useState } from "react"
import { http } from "../../libs/http"
import styles from './Pagination.module.scss'


const Pagination = (props) =>{
    const [friendsList,setFriendsList]= useState([])
    
    useEffect(()=>{
        http('/friends').then((data)=>setFriendsList(Math.round(data.length/10)))
    },[])
    
    return(
        
        <div className={styles.btnNav}>
            {[...Array(friendsList).keys()].map((num,index)=>(<PaginationItem current={index+1} setCurrent={props.setCurrent} key={index} state={props.state} />)
            )}
            
        </div> 
        
        
    )
}

export default Pagination