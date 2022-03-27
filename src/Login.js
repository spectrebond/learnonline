import React, { useEffect, useState } from 'react'
import './Login.css'
import { useHistory } from "react-router-dom"
import { Button, CircularProgress } from "@material-ui/core"
import { EmailOutlined, LockOutlined } from '@material-ui/icons';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wait, setWait] = useState(false);

    const URL = 'https://kernelbackend.herokuapp.com/api/admin/auth/login'
    const login = async()=>{
        setWait(true);
        const loginData = {
            email: email,
            password: password
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        }

        const resp = await fetch(URL,options);
        const respData = await resp.json();
        console.log(respData)
        if(respData.message){
            setWait(false);
            localStorage.setItem('token',respData.token);
            localStorage.setItem('uid',respData.uid);
            history.push('/videos');
        }
        else{
            setWait(false);
            alert(respData.error);
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            history.push('/videos');
        }
    },[])
    return (
        <div className="login">
              <div className = "login_form">
               <h1>Login</h1>
                  <div className="inputBar">
                  <EmailOutlined/>
                  <input type = "email" placeholder = "email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                 <div className="inputBar">
                 <LockOutlined/>
                  <input type = "password" placeholder = "password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 </div>
                  <Button className="btn_sign" variant='contained' fullWidth onClick={login}>Login</Button>
                </div>
                {wait && (
        <>
          <div className="modalbackground">
            <div className="modalContainer">
              <h1>Please Wait...</h1>
              <CircularProgress />
            </div>
          </div>
        </>
      )}
        </div>
    )
}

export default Login;
