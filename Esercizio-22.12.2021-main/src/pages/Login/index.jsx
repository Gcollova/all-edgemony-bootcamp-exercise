import LoginLogic from "../../components/LoginLogic"


const Login =(props)=>{
    return(
        <LoginLogic login={props.login} setLogin={props.setLogin}/>
    )
}

export default Login