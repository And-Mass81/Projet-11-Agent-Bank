import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { userService } from '../_services/user.service';

const Login = () => {
    let navigate = useNavigate()
    const [formData,setFormData] = useState({ // object in the state 
        email:'', 
        password:''

    })

    const OnCompleting =(e)=>{ // synchronisation between state and template
        setFormData({
            ...formData, //previous state
            [e.target.name] : e.target.value // fusion prev state and current state (value + name)
        })
    }

    const onClick = (e)=>{
        e.preventDefault()
        userService.login(formData) // send data from my form
             .then(res => {
                console.log(res)
                userService.saveToken(res.data.body.token) // i get the token from the result axios(folow the structure of the object exeample:body.token)
                navigate('/user')
            })
             .catch(error => console.log(error))
    }

    return (
        
        <main className="main bg-dark">
            <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser }></FontAwesomeIcon>
                <h1>Sign In</h1>
                <form onSubmit={onClick}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="text" name='email' value={formData.email} onChange={OnCompleting}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" name='password' value={formData.password} onChange={OnCompleting}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <a href="" className="sign-in-button">Sign In</a> */}
                    <button className="sign-in-button">Sign In</button>

                </form>
            </section>
        </main>
        
    );
};

export default Login;