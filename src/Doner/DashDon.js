import { Outlet } from "react-router-dom";
import Navbar2 from "../component/Navbar2";
import '../component/Dashboard.css'
import { useEffect,useState } from "react";
import ReactSwitch from "react-switch";
import ReqestDon from "./ReqestDon";
import axios from "axios";



function DashDon(){

    const [userRequest,setUserRequest]=useState([]);
    const[donername,setDonername]=useState("Anindita Sarkar");
    const[donerphno,setDonerphno]=useState(9007257060); 
     
    const[post,setPost]=useState([]);
    const [pincode,setpinCode]=useState();
    const [donor_id, setDonor_id] = useState("");
    
    const[id,setId]=useState("");
    //
    const [nextDate,setNextDate]=useState("8/29/2020, 10:30:10 PM");
    const [time,setTime]=useState(0);
    const [difference,setDifference]=useState(0);

    
    const [status, setStatus] = useState();

  //Searching Profile by pincode
   function handelSearch(){
      
    let result = [];
    for(let i=0;i<userRequest.length;i++){
       if(pincode==userRequest[i].userPinCode){
          
         result.push(userRequest[i])
         console.log(post)
       }
       setUserRequest(result)
    }
    
 }

   useEffect(()=>{
    
    if(localStorage.getItem('donor_id'))
    {
        const did = localStorage.getItem('donor_id');
        setDonor_id(did)
        
    }
    else{
        setDonor_id('');
    }

    //get diteals of donor for set the avialabe switch status
    if(donor_id !==''){
        axios
        .get(`https://bld-donation-api.onrender.com/getDitealsDonor/${donor_id}` )
        .then((response)=>{
         
         setId(response.data[0]._id);

         setStatus(response.data[0].status);
         setNextDate(response.data[0].nextDate);
         console.log(nextDate);

         })
        .catch(err => {
            console.error(err);
            alert("Something Error Try again")
          });

        }
    
     //get diteals by donor email of which user sent request tor donor 
    if(donor_id !==''){
      axios
      .get(`https://bld-donation-api.onrender.com/getRequestdonor/${donor_id}` )
      .then((response)=>{
         setUserRequest(response.data);
         console.log(response.data)
      })
      .catch(err => {
         console.error(err);
         alert("Something Error Try again")
       });

     }
  getDate();

  if(donor_id !==''){
    axios
    .get(`https://bld-donation-api.onrender.com/donorToUserAcceptDonor/${donor_id}` )
    .then((response)=>{
      setDonername(response.data[0].userName)
      setDonerphno(response.data[0].userPhoneNumber)
    })
    .catch(err => {
       console.error(err);
       alert("Something Error Try again")
     });

   }
    
    
   })

function getDate(){
      
    let currentDate=new Date().toLocaleString();
    let dd=currentDate.split(",");
    let dateCurrent =new Date(dd[0]);
 
    let dd1=nextDate.split(",");

    console.log(dd+""+dd1)

    let dateNext=new Date(dd1[0])
     let timeDifference=dateNext.getTime()-dateCurrent.getTime();
     let daydiff=timeDifference/(1000*60*60*24);
     setDifference(daydiff)
     console.log(difference);
     if(daydiff >=0){
       //status1=false;
       setTime(daydiff);
     }else{
       //status1=value;
       setTime(0);
     }
     
 
 }

   
   // change available status by id
   const handleChange = (value) => {
    
    
    setStatus(value);
    let message="";
    if(value){
      message="ON"
    }else{
      message="OFF"
    }

    let status1="";
    if(difference >=0){
      status1=false;
      //setTime(daydiff);
    }else{
      status1=value;
      //setTime(daydiff);
    }
    
    
    const registerData={
            
            "status":status1,
    }

    axios
    .patch(`https://bld-donation-api.onrender.com/updateDonor/${id}`, registerData)
    .then(() => {
        console.log("Data updated and added to database")
        alert(`Your status change to ${message} `);
    })
    .catch(err => {
      console.error(err);
      alert("Something Error Try again")
    });
   
    
  }
    return(
        <div className="total">
        <Navbar2></Navbar2>
        <div className="search">
        <input placeholder="Search donor by pincode" type="number" onChange={event=>setpinCode(event.target.value)}></input>
        <button onClick={handelSearch}>Search</button>
        <h5>You accept Request Of <span>{donername}</span> for contact no: <span>{donerphno}</span> </h5>
        </div>
        <div className="dashUs">
            <div className="topdash">
            <h5>Active Status</h5>
        <div className="reactSwitch">
        <ReactSwitch
                    checked={status}
                    onChange={handleChange}
                />

         
                
         </div>
         <div className="timer">
            <h6>{`Timer : ${time} days left`}</h6>
         </div>
                
                
            </div>
            <div className="bottomdash">
            <h4>Sent Requests</h4>
            
                <label className="namef">Name</label>
                <label className="pincodef">Pin code</label>
                <label className="phoneNumberf">Contact number</label>
                <label className="bloodgroupf">Blood group</label>
              
                <hr></hr>


                <div className="donor">
           
            {
               // user Request section
               userRequest.map((donor)=>(
                  <ReqestDon key={Math.random()} dash={donor} id={id}></ReqestDon>
               ))
               
            }
         </div>

            </div>
        </div>
        <Outlet></Outlet>
        </div> 
    )
}
export default DashDon;