import { useState } from 'react';
import './Register.css';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
function Register(){
    const [name,setName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState();
    const [location,setLocation]=useState("");
    const [pinCode,setPinCode]=useState();
    const [bloodGroup,setBloodGroup]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const registerHandeler=(event)=>{
        event.preventDefault();

        //creating registerdataObject
        const registerData={
        "name":name,
        "phoneNumber":phoneNumber,
        "location":location,
        "pinCode":pinCode,
        "bloodGroup":bloodGroup,
        "email":email,
        "password":password
        }

        //axios 
        axios
        .post('http://localhost:5000/register', registerData)
        .then(() => {
            console.log("Data Created added to database")
            alert('Registration Sucessfull')
        })
        .catch(err => {
          console.error(err);
          alert("Something Error Try again")
        });
        event.target.reset();
    }

    return(
        
        <div className="container3">
            
            <form onSubmit={registerHandeler}>
            
            <div>
            <lable className='head'>User Register</lable><br></br><hr></hr>
            <label>Name</label><br></br>
            <input type="text"  placeholder="Enter Your name" className='text' onChange={event => setName(event.target.value)}></input><br></br>
            
            <label>Location</label><br></br>
            <input type="text"  className='text' onChange={event => setLocation(event.target.value)}></input><br></br>
            
            <label>Blood group</label><br></br>
            <input type="text"  className='text' onChange={event => setBloodGroup(event.target.value)}></input><br></br>
            <label>Email ID</label><br></br>
            <input type="text" placeholder="youremail@.gmail.com" className='text' onChange={event => setEmail(event.target.value)}></input><br></br>
            <label>Password</label><br></br>
            <input type="Password"  className='text' onChange={event => setPassword(event.target.value)}></input><br></br>
            <button><b>Register</b></button><br></br>
            <lable className='lastext'>If you registered, then click <Link to="/index"><span><u>LogIn.</u></span></Link></lable>
            </div>
            <div className='side'>
            <hr></hr>
            <label>Phone No</label><br></br>
            <input type="text" placeholder="ex.123456789" className='text' onChange={event => setPhoneNumber(event.target.value)}></input><br></br>
            
            <label>PIN No</label><br></br>
            <input type="text"  className='text' onChange={event => setPinCode(event.target.value)}></input><br></br>
            </div>
            </form>
            
            
            <div className='img'>
            
            </div>
            <Outlet></Outlet>
        </div>
        
    )
}
export default Register;