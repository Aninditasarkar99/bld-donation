import { useEffect, useState } from 'react';
import './Dashboard.css'
import axios from 'axios';


function DonorList({profile,requestProf,message}){
    
    const[disable,setDisable]=useState(true);
    const[donor_id,setDonor_id]=useState("");
    const [requestProfile,setRequestProfile]=useState([]);

    // set profile data of user
    const [userName,setUserName]=useState("");
    const [userPhoneNumber,setUserPhoneNumber]=useState();
    const [userPinCode,setUserPinCode]=useState();
     const [userBloodGroup,setUserBloodGroup]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('donor_id'))
        {
            const did = localStorage.getItem('donor_id');
            setDonor_id(did)
            
        }
        else{
            setDonor_id('');
        }

         // get profile data of user
         if(donor_id !==''){
            axios
            .get(`https://bld-donation-api.onrender.com/getDiteals/${donor_id}` )
            .then((response)=>{
                setUserName(response.data[0].name);
                setUserPhoneNumber(response.data[0].phoneNumber);
                setUserPinCode(response.data[0].pinCode);
                setUserBloodGroup(response.data[0].bloodGroup);
            })
            .catch(err => {
                console.error(err);
                alert("Something Error Try again")
              });
    
            }
         


          
        // if(donor_id !==''){
        //     axios
        //     .get(`http://localhost:5000/getRequestDiteals/${donor_id}` )
        //       .then((response)=>{
        //        setRequestProfile(response.data);
        //        console.log(requestProfile.length);
        //       })
        //       .catch(err => {
        //        console.error(err);
        //        alert("Something Error Try again")
        //      });
            
             
            // for(let i=0;i<request.length;i++){
                //  console.log(requestProf.donorName)
                if(requestProf.donorEmail===profile.email){
                    setDisable(requestProf.request)
                }
            //}
        //}
       
        
    })
    
    function send(e,email,name,pinCode,phoneNumber,bloodGroup){
        // send user to donor request and diteals
        setDisable(false);
        const registerData={
            "userEmail":donor_id,
            "userName":userName,
            "userPinCode":userPinCode,
            "userPhoneNumber":userPhoneNumber,
            "userBloodGroup":userBloodGroup,
            "donorEmail":email,
            "donorName":name,
            "donorPinCode":pinCode,
            "donorPhoneNumber":phoneNumber,
            "donorBloodGroup":bloodGroup,
            "request":true,
            }

            axios
        .post('https://bld-donation-api.onrender.com/userToDonorRequest', registerData)
        .then(() => {
            
            console.log("Data Created added to database")
            alert(`Request sent to ${email}`)
            window.location.reload(true)
        })
        .catch(err => {
          console.error(err);
          alert("Something Error Try again")
        });

        


    }

    //delete request and delete diteals from database
    function cancel(e,email){
        setDisable(true);
        const data={
            userEmail:donor_id,
            donorEmail:email
        }

        axios
        .delete("https://bld-donation-api.onrender.com/userToDonorDelete" ,{data:data})
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
        {/* <h4>{message}</h4> */}
        <label className='name3'>{profile.name}</label>
        <label className='pincode'>{profile.pinCode}</label>
        <label className='phoneNumber'>{profile.phoneNumber}</label>
        <label className='bloodgroup'>{profile.bloodGroup}</label>

        <div className='buttonRequest'>
        <button disabled={!disable} onClick={e=>send(e,profile.email,profile.name,profile.pinCode,profile.phoneNumber,profile.bloodGroup)} >Send Request</button>
        <button disabled={disable} onClick={e=>cancel(e,profile.email)}>Cancel Request</button>
        </div>
    </div>
   )
}
export default DonorList;