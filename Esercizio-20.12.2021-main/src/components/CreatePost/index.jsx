import { useState,useEffect } from 'react'
import { httPost } from '../../libs/http';
import styles from './CreatePost.Module.scss'

const CreatePost =()=>{

    const [post,setPostState] = useState({        
        author: "",
        text: "",
        date: new Date().toISOString(),
        img: "" 
    });
    

    const [formObject,setFormObject] = useState({})

    const handleBtnSend =(e)=> {
        e.preventDefault()
        httPost("/posts",formObject)
        console.log(formObject);
    }
    
    useEffect(() => {
        console.log("ciao")
        setFormObject(
            {
                author:post.author,
                text: post.text,
                date:new Date().toISOString(),
                img: post.img                
            }
        )
            
        
    }, [post.author,post.text,post.img]);
        
     
    

    return(
        <div className={styles.createPost}>

            <form >
                <div className={styles.required}>
                    <input value={post.author} onChange={(e)=>setPostState({...post,author:e.target.value})} name='author' id='author' type="text" placeholder='Author' required />
                    <input value={post.img} onChange={(e)=> setPostState({...post,img:e.target.value})} name='img' id='img' type="text" placeholder='img URL' />
                    <button onClick={handleBtnSend} type='submit'>Send</button>
                </div>
                
                <textarea value={post.text} onChange={(e)=> setPostState({...post,text:e.target.value})}  name='message' id='message' type="text" placeholder='Text' required></textarea> 
                
            </form>


        </div>
    )
}

export default CreatePost