import './Index.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Index(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");
    

    const[user,setUser]=useState([]);
    

    let navigate = useNavigate();
    const submitHandeler=(event)=>{
        event.preventDefault();

        if(email==="" && password===""){
            alert("Fill both email and password first")
            return
        }
        
   
        if(user.length>0){
            navigate('/home2');
            localStorage.setItem('authenticated','true');
            localStorage.setItem('user','true');
            localStorage.setItem('donor_id', email);
        }else{
            setMessage(" You are not a registerd user Register First !!");
        }
}
    const fetchData=()=>{
        axios
        .post("https://bld-donation-api.onrender.com/loginUser",{email,password})
        .then((response)=>{
        
         setUser(response.data);
         //console.log(user)
        })
        .catch(err => {
            console.error(err);
            alert("Something Error Try again")
          });

    }
    useEffect(()=>{
        fetchData();
        
    });
    return(


        <div>
        <div className="container2">
           
            <form className='back' onSubmit={submitHandeler}>
            <div className='email'>
            <h2><u>User LogIn</u></h2>
            <label className='lbl'>Email ID</label><br></br>
            <input type="text" placeholder='youremail' className='text2' onChange={event=>setEmail(event.target.value)}></input><br></br>
            </div>
            <div className='password'>
            <label className='lbl'>Password</label><br></br>
            <input type="password" placeholder='password' className='text2' onChange={event=>setPassword(event.target.value)}></input><br></br>
            
            </div>
            <div className='btn-div'>
            <button className='btn2'>Log In</button><br></br>
            <p className='error'>{message}</p>
            <lable className="lastext">If you don't register, then click <Link to="/register"><span><u>here.</u></span></Link></lable>
            </div>
            </form>
            <div className='img2'>
            
            </div>
            
        </div>
        <Outlet></Outlet>
        </div>
    )
}
export default Index;