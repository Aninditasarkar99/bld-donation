import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";
import './Dashboard.css'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import DonorList from "./DonerList";
import RequestList from "./RequestList";

function Dashboard(){
    const[donername,setDonername]=useState("Anindita Sarkar");
    const[donerphno,setDonerphno]=useState(9007257060);
    const[post,setPost]=useState([]);
    const [pinCode,setPinCode]=useState();
    const [profile,setProfile]=useState([]);
    const [flag,setFlag]=useState(0);
    const [requestProfile,setRequestProfile]=useState([]);
 
    const[donor_id,setDonor_id]=useState("");
    const[oops,setOops]=useState("");
 
    
 
    useEffect(()=>{
       if(flag===0){
          if(localStorage.getItem('donor_id'))
          {
              const did = localStorage.getItem('donor_id');
              setDonor_id(did)
              
          }
          else{
              setDonor_id('');
          }
 
       // get diteals of donors who's are available
       {
       axios
         .get("https://bld-donation-api.onrender.com/getDitealsStatus/true" )
         .then((response)=>{
          setProfile(response.data);
         })
         .catch(err => {
          console.error(err);
          alert("Something Error Try again")
        });
       
       }
 
       // get diteals of donors who's are reuqested by current login user
       if(donor_id !==''){
       axios
       .get(`https://bld-donation-api.onrender.com/getRequestDiteals/${donor_id}` )
         .then((message)=>{
          setRequestProfile(message.data);
          
         })
         .catch(err => {
          console.error(err);
          alert("Something Error Try again")
        });
       }
       if(donor_id !==''){
        axios
        .get(`https://bld-donation-api.onrender.com/donorToUserAcceptUser/${donor_id}` )
        .then((response)=>{
            setDonername(response.data[0].donorName)
            setDonerphno(response.data[0].donorPhoneNumber)
        })
        .catch(err => {
           console.error(err);
        //    alert("Something Error Try again")
         });
    
       }
       
 
    }
       
    },[donor_id])
 
   //Searching Profile by pincode
   function handelSearch(){
      
    let result = [];
    
    for(let i=0;i<profile.length;i++){
       if(pinCode==profile[i].pinCode){
          console.log(profile[i])
         result.push(profile[i])
         
       }
       else{
         setOops("Not Available Any Doner In This PIN Code");
       }
       setProfile(result);
       
    }
    
    
 }
        
    return(
        <div className="total">
        <Navbar2></Navbar2>
        
        <div className="search">
            <input placeholder="Search donor by pincode" type="number" onChange={event=>setPinCode(event.target.value)}></input>
            <button onClick={handelSearch}>Search</button>
            <h5>Your Request accepted by <span>{donername}</span> for book appointment contact PH no: <span>{donerphno}</span> </h5>
        </div>
        
        <div className="dashUs">
            <div className="topdash">
                <h4>Sent Requests</h4>
                <div className="labelholder">
                <label className="namef">Name</label>
                <label className="pincodef">Pin code</label>
                <label className="phoneNumberf">Contact number</label>
                <label className="bloodgroupf">Blood group</label>
                </div>
                <hr></hr>
                <div className="donor">
           
                {
                // Sent Request Section
                requestProfile.map((donor)=>(
                    <RequestList key={Math.random()}  profile={donor}></RequestList>

        
                ))
                
                }
            </div>
                
            </div>
            <div className="bottomdash">
                <h4>Available Donor</h4>
                <div className="labelholder">
                <label className="namef">Name</label>
                <label className="pincodef">Pin code</label>
                <label className="phoneNumberf">Contact number</label>
                <label className="bloodgroupf">Blood group</label>
                </div>
                <hr></hr>

                <div className="donor">
           
                {
                //Available donors section
                profile.map((donor)=>(
                    <DonorList key={Math.random()} requestProf={requestProfile}  profile={donor} ></DonorList>

        
                ))
                
                }
            </div>

            </div>
        </div>
        <Outlet></Outlet>
        </div>

    )
}
export default Dashboard;