import { useState } from "react"
import { useEffect,} from "react/cjs/react.development"


const LoginLogic=({login,setLogin})=>{
       
    


       const [user,setUser] = useState({
           name:"",
           password:"",
           logged:"",

       })

    useEffect(()=>{
        if(user.logged){

            setLogin({
                name:user.name,
                logged:user.logged,
                password:user.password
            })
        } 
            
        
        
        
    },[user.name,user.logged,user.password,setLogin])

    function submitForm(e){  
        if(user.name==="" || user.password===""){
            
        }
        else{
         e.preventDefault();
        setUser({...user,logged:true});   
        }      
        
    }
    
    return(
        <>
        {login.logged ? <><h3>Benvenuto {user.name}</h3> <button onClick={()=>window.location.reload()}>LogOut</button> </>:
         <div>
         <h3>Registrati o Accedi</h3>
         <form action="">
             <input value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}} type="text" name="userID" id="userID" placeholder="Nome Utente" required/>
             <input value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} type="text" name="password" id="password" placeholder="Password" required/>
             <button onClick={submitForm}  >Login</button>
         </form>
         </div>}


        </>
    )
    }

export default LoginLogic