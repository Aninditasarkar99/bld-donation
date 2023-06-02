import { useEffect, useState } from 'react';
import '../component/Dashboard.css'
import axios from 'axios';

function ReqestDon({dash,id}){

    const[disable,setDisable]=useState(false);
    const[donor_id,setDonor_id]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('donor_id'))
        {
            const did = localStorage.getItem('donor_id');
            setDonor_id(did)
            
        }
        else{
            setDonor_id('');
        }
        
    },[donor_id])

    // accept request by donor 
function send(e,userEmail,userName,userPinCode,userPhoneNumber,userBloodGroup,donorEmail,donorName,donorPinCode,donorPhoneNumber,donorBloodGroup){
        deleteRequest(donor_id,userEmail);
           
           const registerData={
           
            "status":false,
            "lastDate":new Date().toLocaleString(),
            "nextDate":new Date(new Date().setDate(new Date().getDate() + 100)).toLocaleString(),
    }      

    axios
    .patch(`https://bld-donation-api.onrender.com/updateDonor/${id}`, registerData)
    .then(() => {
        console.log("Data updated and added to database")
        //alert(`Your status change to ${message} `);
    })
    .catch(err => {
      console.error(err);
      alert("Something Error Try again")
    });

    if(donor_id !==''){
    const requestData={
        "userEmail":userEmail,
        "userName" :userName,
        "userPinCode":userPinCode,
        "userPhoneNumber":userPhoneNumber,
        "userBloodGroup":userBloodGroup,
        "donorEmail":donorEmail,
        "donorName":donorName,
        "donorPinCode":donorPinCode,
        "donorPhoneNumber":donorPhoneNumber,
        "donorBloodGroup":donorBloodGroup
        
    }

    axios
    .post('https://bld-donation-api.onrender.com/donorToUserAccept', requestData)
    .then(() => {
        console.log("Data Created added to database")
        alert(`You sucessfully aceepted request of ${userName}`)
    })
    .catch(err => {
      console.error(err);
      alert("Something Error Try again")
    });
       
    }
}

    
const cancel= (e,email)=>{
       
       deleteRequest(donor_id,email);
       window.location.reload(true)
    } 

    //reject request and delete diteals from database   
    function deleteRequest(donor_id,email){
        const data={
            userEmail:email,
            donorEmail:donor_id,
        }
        axios
        .delete('https://bld-donation-api.onrender.com/userToDonorDelete' ,{data:data})
        .then(() => {
            alert(`Request delete to ${email}`)
            console.log("Data Deleted From Database")
            
        })
        .catch(err => {
          console.error(err);
          alert("Something Error Try again")
        });
    }
    

   return(
    <div className="donorHolder">
        <label className='name3'>{dash.userName}</label>
        <label className='pincode'>{dash.userPinCode}</label>
        <label className='phoneNumber'>{dash.userPhoneNumber}</label>
        <label className='bloodgroup'>{dash.userBloodGroup}</label>

        <div className='buttonRequest'>
        <button disabled={disable} onClick={e=>send(e,dash.userEmail,dash.userName,dash.userPinCode,dash.userPhoneNumber,dash.userBloodGroup,dash.donorEmail,dash.donorName,dash.donorPinCode,dash.donorPhoneNumber,dash.donorBloodGroup)} >Accept Request</button>
        <button disabled={disable} onClick={e=>cancel(e,dash.userEmail)}>Cancel Request</button>
        </div>
    </div>
   )
}
export default ReqestDon;
