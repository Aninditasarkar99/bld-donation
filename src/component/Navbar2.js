import { useNavigate } from 'react-router-dom';
import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Navbar2.css';

function Navbar2(){
    const [donor_id, setDonor_id] = useState("");
    const [type,setType] = useState("");

    let navigate = useNavigate()
    function userLog(){
        navigate('/index')

    }
    function donerLog(){
        navigate('/LoginDon');
    }

    useEffect(()=>{
        if(localStorage.getItem('authenticated'))
        {
            const authenticated = localStorage.getItem('authenticated')
    
            if(authenticated === false)
            {
                navigate('/') 
            }
        }
        else{
            navigate('/')   
        }
        if(localStorage.getItem('donor_id'))
            {
                const did = localStorage.getItem('donor_id');
                setDonor_id(did)
            }
            else{
                setDonor_id('');
            }

            if(localStorage.getItem('user')){
        
                setType("user");
             }else if(localStorage.getItem('donor')){
              setType("donor");
             }else{
              setType("");
             }
      },[]);


    function logOut(){
        localStorage.removeItem('authenticated');
        localStorage.removeItem('donor_id');
        localStorage.removeItem('user');
        localStorage.removeItem('doner');
        navigate('/');
        window.location.reload(true);
        console.clear();
      }

return(
    <header>
        <nav className="navbar navbar-dark bg-light-dark">
        <h3 className="navbar-brand">yourblooddoner@email.com || ph:988654231</h3>
        {
            donor_id ===''?(
                <div className='logbtn'>
                    {/* <h4>Login As a</h4> */}
                    <label>Login as</label>
                    <button className='logoutbtn' onClick={donerLog}>Doner</button>
                    <span>or</span>
                    {/* <h4> or </h4> */}
                    <button className='logoutbtn' onClick={userLog}> User</button>
                </div>
            ):(
                <div className='logbtn'>
                    {/* <h4>Logout from your profile</h4> */}
                    <button className='logoutbtn' onClick={logOut}>LogOut</button>
                </div>
            
            )
        }
        </nav>
        <div className='switcher'>
            <img src ="cute.png"></img>
         <h4>Blood Donation</h4>
         {/* <img src ="cute.png"></img> */}
         {
          donor_id ===''?(
            <div className='switchHolder'>
          <NavLink activeClassName="active" className='link' to="/"></NavLink>
          </div>
          ):(
            type ==='user'?
               (
           
            <div className='switchHolder'>
            <NavLink activeclassname="active" className='link' to="/home2"><h5>Home</h5></NavLink>
             <NavLink activeclassname="active" className='link' to="/dashboard1"><h5>Dashboard</h5></NavLink>
             <NavLink activeclassname="active" className='link' to="/profile1"><h5>Profile</h5></NavLink>
            </div>
          ):(
         
          <div className='switchHolder'>
          <NavLink activeClassName="active" className='link' to="/homeDoner"><h5>Home</h5></NavLink>
           <NavLink activeClassName="active" className='link' to="/dashdon"><h5>Dashboard</h5></NavLink>
           <NavLink activeClassName="active" className='link' to="/profiledon"><h5>Profile</h5></NavLink>
          </div>
          )
          )
          }  
        </div>
        <Outlet></Outlet>
    </header>
)
}
export default Navbar2;