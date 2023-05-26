import { Outlet } from "react-router-dom";
import Navbar2 from "../component/Navbar2";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import'../component/Userhome.css';
import Footer from "../component/Footer";
import React from 'react';
import Bodycover from "../component/Bodycover";



function DonerHome(){
    return(
        <div>
        <Navbar2></Navbar2> 
        <div className="divcarousel">
        <Carousel>
            <Carousel.Item>
                <div className="d-block w-90">
                {/* <img
                className="sizeimg"
                src="https://cdn2.hubspot.net/hubfs/2027031/Lanermc_January2018/Images/D53297C6-155D-D235-07048C3BAF7898A0.jpeg"
                alt="First slide"
                /> */}
                <img
                className="middleimg2"
                src="104.jpeg"
                alt="First slide"
                />
                {/* <img
                className="sizeimg"
                src="https://st3.depositphotos.com/17928040/37234/v/600/depositphotos_372344462-stock-illustration-abstract-giving-hand-low-poly.jpg"
                alt="First slide"
                /> */}
                </div>
                <Carousel.Caption>
                <h2 className="first">Welcome To Doner</h2>
                <p className="first">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="d-block w-90">
                <img
                className="middleimg"
                src="heart23.png"
                alt="Second slide"
                
                />
                {/* <span className="middleing">
                    <h3>" YOUR LITTLE EFFORT CAN GIVE<br></br>
                    OTHERS SECOND CHANCE TO LIVE LIFE "</h3></span>              */}
                
                {/* <img
                className="sizeimg2"
                src="heart1.jpg"
                alt="Second slide"
                /> */}
                </div>
                <Carousel.Caption>
                <h2 className="third">" YOUR LITTLE EFFORT CAN GIVE<br></br>
                    OTHERS SECOND CHANCE TO LIVE LIFE "</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
             </Carousel.Item>
            <Carousel.Item>
            <div className="d-block w-90">
                <img
                className="middleimg2"
                src="10yy.webp"
                alt="Third slide"
                />
                {/* <img
                className="sizeimg2"
                src="bank.jpeg"
                alt="Third slide"
                /> */}
                </div>
                <Carousel.Caption>
                <h2 className="third">Third slide label</h2>
                <p className="third">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            

            </div>
       <Outlet></Outlet>
       <Bodycover></Bodycover>
       <Footer></Footer>
       </div>
    );
}
export default DonerHome;