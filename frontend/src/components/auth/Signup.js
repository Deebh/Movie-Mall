import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Signin = () => {
        const [fullname,setFullname]=useState('');
        const [username,setUsername]=useState('');
        const [password,setPassword]=useState('');
        const [email,setEmail]=useState('');
        const [message,setMessage]=useState('');
        const changeOnClick= e => {
            e.preventDefault();
            const users={
                fullname,
                username,
                password,
                email
               
            }
            setFullname('');
            setUsername('');
            setPassword('');
            setEmail('');
            axios.post("http://localhost:8080/user/signup",users)
            .then(res=>{
               // history.push("/Signin");
                setMessage(res.data)})
            .catch(err=>{
                console.log(err);
            })
        } 
    return (
        
    <LoginContainer>

        <div className="container">

                    <h1 style={{ color: 'rgb(207, 77, 41)' }}>Register</h1>
                    <span className="message">{message}</span>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" 
                    value={fullname}
                    onChange={e=>setFullname(e.target.value)}
                    className="form-control"  
                    style={{ backgroundColor: 'rgba(207, 77, 41,0.1)', color: 'rgba(207, 77, 41)' }}
                    placeholder="Full Name"/>
                </div>
                <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" 
                        value={username}
                        onChange={e=>setUsername(e.target.value)}
                        className="form-control"  
                        style={{ backgroundColor: 'rgba(207, 77, 41,0.1)', color: 'rgba(207, 77, 41)' }}
                        placeholder="User Name"/>
                </div>
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        className="form-control"  
                        style={{ backgroundColor: 'rgba(207, 77, 41,0.1)', color: 'rgba(207, 77, 41)' }}
                        placeholder="Passsword"/>
                 </div>
                <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        className="form-control"  
                        style={{ backgroundColor: 'rgba(207, 77, 41,0.1)', color: 'rgba(207, 77, 41)' }}
                        placeholder="Email"/>
                 </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            <br/>
            <Link to="/signin">
                 <h5 style={{ color: 'rgb(207, 77, 41)' }}>Already have an account?</h5> 
             </Link>
                    
        </div>
    </LoginContainer>
    )
}

export default Signin
//main container

const LoginContainer=styled.div`
margin:3rem auto;
padding:4rem;
width:31.25rem;
h1{
    font-weight:900;
    color:var(--dark-green);
}
.btn-primary{
    margin-top:2rem;
    background:var(--dark-green);
    border:none;
    color: rgb(207, 77, 41) !important;
    &:hover{
        background:var(--light-green);
    }
}
.message{
    font-weight:900;
    color:tomato;
    padding:1rem 1rem 1rem 0;
}
`;

